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
import { AttachmentService } from 'src/app/Services/Attachment.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/Services/Auth.service';

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
  followers: IFollowUser[] | null = null;
  slides: IServiceAttachmentCustom[] = [];



  constructor(
    private VendorService: VendorService,
    private ReviewService: ReviewService,
    private ActivatedRoute: ActivatedRoute,
    private CategoryService: CategoryService,
    private FollowService: FollowService,
    private AttachmentService: AttachmentService,
    private CookieService: CookieService,
    public AuthService: AuthService) {
    this.data = new FormData();
  }

  ngOnInit() {
    // get vendor Id from router
    this.vendorId = parseInt(this.ActivatedRoute.snapshot.paramMap.get("id")!);
    this.currentUserId = this.CookieService.get("Id");

    console.log(this.vendorId)
    console.log(this.currentUserId)

  }

  ngAfterViewInit(): void {
    this.GetFollowers();

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

      this.ReviewService.GetAverageRate(this.vendorId!)
      .subscribe({
        next: (response) => {
          this.avgRate = response;
        },
        error: (error) => {
          console.log(error);
        }
      })

    this.AttachmentService.GetByVendorId(this.vendorId!)
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
          console.log(data);
          this.FollowService.IsFollowing(this.vendorId!)
            .subscribe((result) => {
              console.log(result)
              if (result == false) {
                this.isFollowing = false
              }
              else {
                this.isFollowing = true
              }
              console.log(this.isFollowing)
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
