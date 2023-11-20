import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PaginationInstance } from 'ngx-pagination';
import { IFollowUser } from 'src/app/Models/IFollow';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { FollowService } from 'src/app/Services/Follow.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  Followers: PaginationViewModel<IFollowUser> | null = null;
  p: number | undefined = undefined;
  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage: 2,
    currentPage: 1,
  };
  constructor(
    private FollowService: FollowService,
    private CookieService: CookieService,
    private ActivatedRoute: ActivatedRoute,
    private Router: Router) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.config.currentPage = parseInt(params.get('page')!);
        this.getData();
      },
    });
  }

  getData() {
    this.FollowService.GetWhoFollowsVendors(parseInt(this.CookieService.get("VendorId")))
      .subscribe(
        {
          next:
            (result) => {
              this.Followers = result;
              this.config.currentPage = result.pageIndex;
              this.config.totalItems = result.count;
              this.config.itemsPerPage = result.pageSize;
            },
          error: (error) => console.log(error)
        },
      );
  }

  pageChange(newPage: number) {
    this.Router.navigate(['../followers/', newPage], { relativeTo: this.ActivatedRoute })
    this.getData();
  }
}
