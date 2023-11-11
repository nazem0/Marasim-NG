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

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit, AfterViewInit {
  apiUrl = environment.serverUrl;
  VendorId: number | null = null;
  Vendor: FullVendorInfo | null = null;
  Category: ICategory | null = null;
  Reviews: IReview[] | null = null;
  Followers: IFollowUser[] | null = null;
  Slides: IServiceAttachmentCustom[] = [];



  constructor(
    private VendorService: VendorService,
    private ReviewService: ReviewService,
    private ActivatedRoute: ActivatedRoute,
    private CategoryService: CategoryService,
    private FollowService: FollowService,
    private AttachmentService: AttachmentService) { }

  ngOnInit() {
    // get vendor Id from router
    this.VendorId = parseInt(this.ActivatedRoute.snapshot.paramMap.get("id")!);
    console.log(this.VendorId)
  }

  ngAfterViewInit(): void {
    this.CategoryService.GetByVendorId(this.VendorId!)
      .subscribe((result) => {
        this.Category = result;
      })
    this.VendorService.GetVendorFullFull(this.VendorId!)
      .subscribe((result) => {
        this.Vendor = result;
        console.log("Vendor",result);
      })
    this.FollowService.GetWhoFollowsVendors(this.VendorId!)
      .subscribe((result) => {
        this.Followers = result;
      })

      this.AttachmentService.GetByVendorId(this.VendorId!)
      .subscribe((result) => {
        this.Slides = result;
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
