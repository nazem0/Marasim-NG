import { InvitationService } from './../../../Services/invitation.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-invitation',
  templateUrl: './create-invitation.component.html',
  styleUrls: ['./create-invitation.component.css'],
})
export class CreateInvitationComponent {
  form: FormGroup;
  data: FormData;
  @ViewChild('GroomPic') GroomPic: ElementRef | null = null;
  @ViewChild('BridePic') BridePic: ElementRef | null = null;
  @ViewChild('Poster') Poster: ElementRef | null = null;
  constructor(
    private fb: FormBuilder,
    private InvitationService: InvitationService,
    private Toastr: ToastrService,
    private Router: Router
  ) {
    this.data = new FormData();
    this.form = this.fb.group({
      GroomName: ['', [Validators.required, Validators.maxLength(150)]],
      GroomPic: ['', [Validators.required]],
      BrideName: ['', [Validators.required, Validators.maxLength(150)]],
      BridePic: ['', [Validators.required]],
      DateTime: ['', [Validators.required]],
      Poster: ['', [Validators.required]],
      Location: ['', [Validators.required, Validators.maxLength(150)]],
    });
  }
  submit() {
    if (this.form.valid) {
      this.data.set('GroomName', this.form.get('GroomName')?.value);
      this.data.set('BrideName', this.form.get('BrideName')?.value);
      this.data.set('GroomPic', this.GroomPic?.nativeElement.files[0]);
      this.data.set('BridePic', this.BridePic?.nativeElement.files[0]);
      this.data.set('Poster', this.Poster?.nativeElement.files[0]);
      this.data.set('DateTime', this.form.get('DateTime')?.value);
      this.data.set('Location', this.form.get('Location')?.value);
      this.InvitationService.add(this.data).subscribe({
        next: () => {
          this.Toastr.success('تم إنشاء الدعوة');
          this.Router.navigate(["/invitation"])
        },
        error: (error) => {
          console.log(error);
          this.Toastr.error('حدث خطأ ، حاول مرة أخرى');
        },
      });
    }
  }
}
