import { Component, OnInit } from '@angular/core';
import { UserData, UsersService } from 'src/app/services/users/users.service';
import { map, tap } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  dataSource!: UserData;
  pageEvent!: PageEvent;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'role'];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.usersService
      .findAll(1, 10)
      .pipe(
        tap((users) => console.log(users)),
        map((userData: UserData) => (this.dataSource = userData))
      )
      .subscribe();
  }

  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page + 1;

    this.usersService
      .findAll(page, size)
      .pipe(map((userData: UserData) => (this.dataSource = userData)))
      .subscribe();
  }
}
