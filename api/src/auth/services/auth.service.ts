import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, from, switchMap } from 'rxjs';
import { User } from 'src/user/models/user.interface';
import { compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateJWT(user: User): Observable<string> {
    return from(this.jwtService.signAsync({ user }));
  }

  hashPassword(password: string): Observable<string> {
    return from(genSalt(12)).pipe(
      switchMap((salt: string) => hash(password, salt)),
    );
  }

  comparePasswords(
    password: string,
    passwordHash: string,
  ): Observable<boolean> {
    return from(compare(password, passwordHash));
  }
}
