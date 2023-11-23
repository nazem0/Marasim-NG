import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { IUser } from 'src/app/Models/IUser';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  Users: PaginationViewModel<IUser> | null = null;
  p: number | undefined = undefined;
  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage: 5,
    currentPage: 1,
  };
  constructor(
    public UserService: UserService,
    private activatedRoute: ActivatedRoute,
    private Router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.config.currentPage = parseInt(params.get('page')!);
        this.getData();
      },
    });
  }

  getData() {
    this.UserService.GetAll(this.config.currentPage, this.config.itemsPerPage).subscribe({
      next: (result) => {
        this.Users = result;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  pageChange(newPage: number) {
    this.Router.navigate(['../', newPage], { relativeTo: this.activatedRoute })
  }

}
