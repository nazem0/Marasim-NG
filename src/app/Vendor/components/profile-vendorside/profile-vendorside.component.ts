import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullVendorInfo } from 'src/app/Models/FullVendorInfo';
import { ICategory } from 'src/app/Models/ICategory';
import { IFollowUser, IFollowVendor } from 'src/app/Models/IFollow';
import { IReview } from 'src/app/Models/IReview';
import { CategoryService } from 'src/app/Services/Category.service';
import { ReviewService } from 'src/app/Services/Review.service';
import { VendorService } from 'src/app/Services/Vendor.service';
import { FollowService } from 'src/app/Services/Follow.service';
import { environment } from 'src/environments/environment.development';
import { IServiceAttachmentCustom } from 'src/app/Models/IService';
import { ServiceAttachmentService } from 'src/app/Services/serviceAttachments.service';
import { CookieService } from 'ngx-cookie-service';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';

@Component({
  selector: 'app-profile-vendorside',
  templateUrl: './profile-vendorside.component.html',
  styleUrls: ['./profile-vendorside.component.css']
})
export class ProfileVendorsideComponent {
  apiUrl = environment.serverUrl;
  data: FormData;
  currentUserId: string = '';
  vendorId: number | null = null;
  vendor: FullVendorInfo | null = null;
  category: ICategory | null = null;
  reviews: IReview[] | null = null;
  slides: IServiceAttachmentCustom[] = [];

  constructor(
    private VendorService: VendorService,
    private ReviewService: ReviewService,
    private ActivatedRoute: ActivatedRoute,
    private CategoryService: CategoryService,
    private FollowService: FollowService,
    private ServiceAttachmentService: ServiceAttachmentService,
    private CookieService: CookieService) {
    this.data = new FormData();
  }

  ngOnInit() {
    // get vendor Id from router
    this.vendorId = parseInt(this.CookieService.get("VendorId"));
    this.currentUserId = this.CookieService.get("Id");

    console.log(this.vendorId)
    console.log(this.currentUserId)

  }

  ngAfterViewInit(): void {
    this.CategoryService.GetByVendorId(this.vendorId!)
      .subscribe((result) => {
        this.category = result;
      })

    this.VendorService.GetVendorFullFull(this.vendorId!)
      .subscribe({
        next: (data) => {
          this.vendor = data;
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      })

    this.ReviewService.GetByVendorId(this.vendorId!)
      .subscribe({
        next: (data) => {
          this.reviews = data;
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      })

    this.ServiceAttachmentService.GetByVendorId(this.vendorId!)
      .subscribe((result) => {
        this.slides = result;
      });
  }

  scrollToTargetAdjusted(x: string) {
    var elementPosition = document.getElementById(x)!.getBoundingClientRect().top;
    var offsetPosition: number = (elementPosition) + (window.scrollY);
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

}
