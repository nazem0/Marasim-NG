import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  balance: number = 22
  pageSize = 2;
  currentPage = 0;
  pageSizeOptions: number[] = [3, 5, 10, 25];

  // MatPaginator Inputs
  length = 100;

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent;

  datasource: any;
  // handlePageEvent(pageEvent: PageEvent) {
  //   console.log('handlePageEvent', pageEvent);
  //   this.currentPage = pageEvent.pageIndex;
  // }

  onPageEvent = ($event: any) => {
    this.getData($event.pageIndex, $event.pageSize);
  }

  getData = (pg: number, lmt: number) => {
    // return this.allProjects(pg, lmt).subscribe(res => {
    //   this.tableData = res;
    // });
    this.pageSlice = this.allProjects(pg, lmt);
  }

  allProjects = (page: number, limit: number) => {
    return this.cardItems.slice(this.currentPage, this.currentPage + this.pageSize);
  }

  cardItems = [
    {
      customerName: "علي احمد علي",
      serviceName: "مصور فوتوغرافى",
      date: "22-09-2023",
      totalAmount: 2000,
      imageSrc: "../../../../assets/img/vendor/p-1.jpg"
    },
    {
      customerName: "مصطفى ابراهيم محمد",
      serviceName: "مصور فوتوغرافى",
      date: "22-09-2023",
      totalAmount: 2000,
      imageSrc: "../../../../assets/img/vendor/p-1.jpg"
    },
    {
      customerName: "محمد ناظم محروس",
      serviceName: "مصور فوتوغرافى",
      date: "22-09-2023",
      totalAmount: "2000 L.E",
      imageSrc: "../../../../assets/img/vendor/p-1.jpg"
    },
    {
      customerName: "صهيب احمد محمد",
      serviceName: "مصور فوتوغرافى",
      date: "22-09-2023",
      totalAmount: "2000 L.E",
      imageSrc: "../../../../assets/img/vendor/p-1.jpg"
    },
    {
      customerName: "محمود شلالى",
      serviceName: "مصور فوتوغرافى",
      date: "22-09-2023",
      totalAmount: "2000 L.E",
      imageSrc: "../../../../assets/img/vendor/p-1.jpg"
    },
    {
      customerName: "محمود نادى",
      serviceName: "مصور فوتوغرافى",
      date: "22-09-2023",
      totalAmount: "2000 L.E",
      imageSrc: "../../../../assets/img/vendor/p-1.jpg"
    },
    {
      customerName: "سامر سمير",
      serviceName: "مصور فوتوغرافى",
      date: "22-09-2023",
      totalAmount: "2000 L.E",
      imageSrc: "../../../../assets/img/vendor/p-1.jpg"
    },
    {
      customerName: "احمد ابراهيم",
      serviceName: "مصور فوتوغرافى",
      date: "22-09-2023",
      totalAmount: "2000 L.E",
      imageSrc: "../../../../assets/img/vendor/p-1.jpg"
    },
  ];

  public pageSlice = this.cardItems.slice(this.currentPage, this.currentPage + this.pageSize);


  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get('assets/data.json').subscribe((data: any) => {
    //   this.cardItems = data;
    //   this.pageSlice = this.cardItems.slice(0, this.pageSize);
    // });

    this.pageSlice = this.cardItems.slice(0, this.pageSize);
    
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  onepageChange(event: PageEvent) {
    // const startIndex = event.pageIndex * event.pageSize;
    // let endIndex = startIndex + event.pageSize;

    // if (startIndex < this.cardItems.length) {
    //   this.pageSlice = this.cardItems.slice(startIndex, endIndex);
    // }

    // this.pageSlice = this.cardItems.slice(startIndex, endIndex);


  const startIndex = event.pageIndex * event.pageSize;
  const endIndex = startIndex + event.pageSize;
  
  if (startIndex < this.cardItems.length) {
    this.pageSlice = this.cardItems.slice(startIndex, endIndex);
  }

  }

}
