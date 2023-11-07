import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullVendorInfo } from 'src/app/Models/FullVendorInfo';
import { ICategory } from 'src/app/Models/ICategory';
import { IReview } from 'src/app/Models/IReview';
import { CategoryService } from 'src/app/Services/Category.service';
import { ReviewService } from 'src/app/Services/Review.service';
import { VendorService } from 'src/app/Services/Vendor.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit , AfterViewInit {
  apiUrl = environment.serverUrl;
  vendorID: number | null = null;
  Vendor: FullVendorInfo | null = null;
  category: ICategory | null = null;
  reviews: IReview[] | null = null;



  constructor(
    private VendorService: VendorService,
    private ReviewService: ReviewService,
    private ActivatedRoute: ActivatedRoute,
    private CategoryService: CategoryService) { }

  ngOnInit() {
    // get vendor Id from router
    this.vendorID = parseInt(this.ActivatedRoute.snapshot.paramMap.get("id")!);
    console.log(this.vendorID)
  }

  ngAfterViewInit(): void {
    this.VendorService.GetVendorFullFull(this.vendorID!)
      .subscribe((result) => {
        this.Vendor = result;
        console.log(result);
      })


  }


  scrollToTargetAdjusted(x: string) {
    var elementPosition = document.getElementById(x)!.getBoundingClientRect().top;
    var offsetPosition: number = (elementPosition) + (window.scrollY );
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }




  slides: Array<{ title: string, description: string, image: string }> = [
    {
      title: 'test',
      description: 'test',
      image: '../assets/img/hall.webp'
    },
    {
      title: 'test',
      description: 'test',
      image: '../assets/img/hall.webp'
    },
    {
      title: 'test',
      description: 'test',
      image: '../assets/img/hall.webp'
    },
    {
      title: 'test',
      description: 'test',
      image: '../assets/img/hall.webp'
    },
    {
      title: 'test',
      description: 'test',
      image: '../assets/img/hall.webp'
    }
  ];


}
