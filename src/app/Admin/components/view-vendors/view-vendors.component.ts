import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { IVendorMidInfo } from 'src/app/Models/IVendor';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { UserService } from 'src/app/Services/User.service';
import { VendorService } from 'src/app/Services/Vendor.service';

@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.css']
})
export class ViewVendorsComponent {
  vendors: PaginationViewModel<IVendorMidInfo> | null = null;
  p: number | undefined = undefined;
  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage: 5,
    currentPage: 1,
  };

  constructor(
    public UserService: UserService,
    private VendorService: VendorService,
    private activatedRoute: ActivatedRoute,
    private Router: Router
  ) {
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.config.currentPage = parseInt(params.get('page')!);
        this.getData();
      },
    });
  }
  getData() {
    this.VendorService.GetAll(this.config.currentPage, this.config.itemsPerPage)
      .subscribe({
        next: (result) => {
          this.vendors = result;
          this.config.currentPage = result.pageIndex;
          this.config.totalItems = result.count;
          this.config.itemsPerPage = result.pageSize;
        },
        error: (error) => {
          console.log(error)
        }
      })
  }
  pageChange(newPage: number) {
    this.Router.navigate(['../',newPage],{relativeTo:this.activatedRoute})
  }
}
