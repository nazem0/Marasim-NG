import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { IServiceAttachmentCustom } from 'src/app/Models/IService';
import { ServiceAttachmentService } from 'src/app/Services/serviceAttachments.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-edit-service-attachments',
  templateUrl: './edit-service-attachments.component.html',
  styleUrls: ['./edit-service-attachments.component.css']
})
export class EditServiceAttachmentsComponent implements AfterViewInit {
  @ViewChild("uploadedFiles") uploadedFilesElementRef: ElementRef | null = null
  serviceAttachments: IServiceAttachmentCustom[] | null = null
  serviceId: number | null = null;
  serverUrl = environment.serverUrl;
  data: FormData
  files: FileList | null = null;
  filesUploaded: boolean = false;
  constructor
    (
      public serviceAttachmentService: ServiceAttachmentService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private toastr: ToastrService,
    ) {
    this.data = new FormData();
    this.activatedRoute.paramMap.subscribe({
      next: params => {
        this.serviceId = parseInt(params.get("serviceId")!)
        if (isNaN(this.serviceId))
          this.router.navigate(["404"]);
        else
          this.getAttachments();
      }
    })
  }
  ngAfterViewInit(): void {
    let filesInputElement = this.uploadedFilesElementRef?.nativeElement as HTMLInputElement;
    filesInputElement.addEventListener("change", () => {
      if (filesInputElement.files)
        this.files = filesInputElement.files;

      if (filesInputElement.files?.length! > 0)
        this.filesUploaded = true;

      else
        this.filesUploaded = false
    })
  }
  getAttachments() {
    this.serviceAttachmentService.getByServiceId(this.serviceId!).subscribe(
      {
        next: attachments => this.serviceAttachments = attachments
      }
    )
  }
  addAttachmnets() {
    if(!this.files || this.files.length<=0)
    {
      this.toastr.error("عليك إضافة ملحقات أولاً")
      return;
    }
    this.data.set("ServiceId", this.serviceId!.toString())
    for(let i = 0; i<this.files?.length!;i++ ){
     this.data.append("Attachments",this.files?.item(i) as Blob);
    }    
    this.serviceAttachmentService.add(this.data).subscribe({
      next:()=>{
        this.getAttachments();
        this.toastr.success("تم إضافة الملحقات")
        this.files = null;
        this.data = new FormData();
      },
      error:error=>console.log(error)
    })
  }
  delete(attachmentId: number | string) {
    console.log("here");
    this.serviceAttachmentService.delete(attachmentId).subscribe({
      next: () => {
        this.toastr.success("تم الحذف")
        this.getAttachments();
      },
      error: error => {
        console.log(error);
        this.toastr.error("حاول مرة أخرى", "فشل الحذف")
      }
    })
  }
}
