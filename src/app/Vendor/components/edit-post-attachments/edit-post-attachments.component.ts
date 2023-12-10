import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IPostAttachmentCustom } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-edit-post-attachments',
  templateUrl: './edit-post-attachments.component.html',
  styleUrls: ['./edit-post-attachments.component.css'],
})
export class EditPostAttachmentsComponent implements AfterViewInit {
  @ViewChild("uploadedFiles") uploadedFilesElementRef: ElementRef | null = null
  postAttachments: IPostAttachmentCustom[] | null = null
  postId: number | null = null;
  data: FormData;
  inputArray: any[] = [];
  readers: any[] = [];
  files: FileList | null = null;
  filesUploaded: boolean = false;
  constructor
    (
      public postService: PostService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private toastr: ToastrService,
    ) {
    this.data = new FormData();
    this.activatedRoute.paramMap.subscribe({
      next: params => {
        this.postId = parseInt(params.get("postId")!)
        if (isNaN(this.postId))
          this.router.navigate(["404"]);
        else
          this.getAttachments();
      }
    })
  }

  ngAfterViewInit(): void {
    let filesInputElement = this.uploadedFilesElementRef?.nativeElement;
    filesInputElement.addEventListener("change", () => {
      if (filesInputElement.files) {
        this.files = filesInputElement.files;
      }
      if (filesInputElement.files?.length! > 0) {
        this.filesUploaded = true;
      }
      else {
        this.filesUploaded = false
      }
      for (let index = 0; index < filesInputElement.files!.length; index++) {
        this.readers[index] = new FileReader();
        this.readers[index].readAsDataURL(filesInputElement.files![index]);
        this.readers[index].onload = (_event: any) => {
          this.inputArray!.push(this.readers[index].result);
        };
      }
    })
  }

  getAttachments() {
    this.postService.GetAttachmentsByPostId(this.postId!).subscribe(
      {
        next: (attachments) => {
          this.postAttachments = attachments;
          console.log(this.postAttachments)
        }
      }
    )

  }

  addAttachmnets() {
    if (!this.files || this.files.length <= 0) {
      this.toastr.error("عليك إضافة ملحقات أولاً")
      return;
    }
    this.data.set("PostId", this.postId!.toString())
    for (let i = 0; i < this.files?.length!; i++) {
      this.data.append("Attachments", this.files?.item(i) as Blob);
    }
    this.postService.AddAttachment(this.data).subscribe({
      next: () => {
        this.getAttachments();
        this.toastr.success("تم إضافة الملحقات")
        this.files = null;
        this.data = new FormData();
        this.inputArray = [];
        this.readers = [];
      },
      error: error => {
        console.log(error);
        this.toastr.error("حاول مرة أخرى", "فشلت الاضافة");
        this.inputArray = [];
        this.readers = [];
      }
    })
  }

  delete(attachmentId: number | string) {
    this.postService.DeleteAttachment(attachmentId).subscribe({
      next: () => {
        this.toastr.success("تم الحذف")
        this.getAttachments();
        this.files = null;
        this.data = new FormData();
      },
      error: error => {
        console.log(error);
        this.toastr.error("حاول مرة أخرى", "فشل الحذف")
      }
    })
  }
}
