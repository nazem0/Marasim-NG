import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullVendorInfo } from 'src/app/Models/FullVendorInfo';
import { ICategory } from 'src/app/Models/ICategory';
import { IFollowUser } from 'src/app/Models/IFollow';
import { IReview } from 'src/app/Models/IReview';
import { CategoryService } from 'src/app/Services/Category.service';
import { ReviewService } from 'src/app/Services/Review.service';
import { VendorService } from 'src/app/Services/Vendor.service';
import { FollowService } from 'src/app/Services/Follow.service';
import { environment } from 'src/environments/environment.development';
import { IServiceAttachmentCustom } from 'src/app/Models/IService';
import { ServiceAttachmentService } from 'src/app/Services/serviceAttachments.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/Services/Auth.service';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit, AfterViewInit {
  apiUrl = environment.serverUrl;
  avgRate: number | null = null;
  data: FormData;
  currentUserId: string = '';
  isFollowing: boolean = false;
  vendorId: number | null = null;
  vendor: FullVendorInfo | null = null;
  category: ICategory | null = null;
  reviews: IReview[] | null = null;
  followers: PaginationViewModel<IFollowUser> | null = null;
  slides: IServiceAttachmentCustom[] = [];



  constructor(
    public UserService: UserService,
    private VendorService: VendorService,
    private ReviewService: ReviewService,
    private ActivatedRoute: ActivatedRoute,
    private CategoryService: CategoryService,
    private FollowService: FollowService,
    private ServiceAttachmentService: ServiceAttachmentService,
    private CookieService: CookieService,
    public AuthService: AuthService) {
    this.data = new FormData();
  }

  ngOnInit() {
    // get vendor Id from router
    this.vendorId = parseInt(this.ActivatedRoute.snapshot.paramMap.get("id")!);
    this.currentUserId = this.CookieService.get("Id");
  }

  ngAfterViewInit(): void {
    this.GetFollowers();

    this.VendorService.GetVendorFullFull(this.vendorId!)
      .subscribe({
        next: (data) => {
          this.vendor = data;
          console.log(data);
          this.CategoryService.GetById(this.vendor?.categoryId!)
            .subscribe((result) => {
              this.category = result;
            })
        },
        error: (error) => {
          console.log(error);
        }
      })

    this.ReviewService.GetByVendorId(this.vendorId!)
      .subscribe({
        next: (data) => {
          this.reviews = data;
        },
        error: (error) => {
          console.log(error);
        }
      })

    this.ReviewService.GetAverageRate(this.vendorId!)
      .subscribe({
        next: (response) => {
          this.avgRate = response;
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


  GetFollowers() {
    this.FollowService.GetWhoFollowsVendors(this.vendorId!)
      .subscribe({
        next: (data) => {
          this.followers = data;
          this.FollowService.IsFollowing(this.vendorId!)
            .subscribe((result) => {
              if (result == false) {
                this.isFollowing = false
              }
              else {
                this.isFollowing = true
              }
            })
        },
        error: (error) => {
          console.log(error);
        }
      })
  }


  Follow() {
    this.data.set('VendorId', this.vendorId!.toString());

    this.FollowService.Add(this.data)
      .subscribe({
        next: (data) => {
          console.log("Followed");
          this.GetFollowers();
          this.isFollowing = true;
          this.data = new FormData();
        },
        error: (error) => {
          console.log(error);
        }
      })

  }

  Unfollow() {
    this.FollowService.Delete(this.vendorId!)
      .subscribe({
        next: (data) => {
          console.log("Unfollowed");
          this.GetFollowers();
          this.isFollowing = false;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }



}
