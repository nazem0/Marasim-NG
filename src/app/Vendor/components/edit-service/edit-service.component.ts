import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IService } from 'src/app/Models/IService';
import { ServiceService } from 'src/app/Services/service.service';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent {
  apiUrl = environment.serverUrl;
  service: IService | null = null;
  editServiceForm: FormGroup;
  data: FormData;
  formIsValid = false;

  constructor(
    private formBuilder: FormBuilder,
    private ServiceService: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr:ToastrService
  ) {
    this.activatedRoute.paramMap.subscribe({
      next: params => {
        let serviceIdParam = parseInt(params.get("serviceId")!);
        if (isNaN(serviceIdParam))
          this.router.navigate(["/404"]);
        else
          this.ServiceService.GetById(serviceIdParam).subscribe({
            next: service => this.service = service
          })
      }
    })
    this.data = new FormData();
    this.editServiceForm = this.formBuilder.group({
      Title: [this.service?.title, [Validators.minLength(3), Validators.maxLength(50)]],
      Price: [this.service?.price],
      Description: [this.service?.description, [Validators.minLength(20), Validators.maxLength(1000)]],
    });
    this.editServiceForm.statusChanges.subscribe(() => {
      this.formIsValid = this.editServiceForm.valid;
    });
  }

  updateService() {
    if (this.formIsValid) {
      if (this.editServiceForm.get('Title')?.value) {
        this.data.set('Title', this.editServiceForm.get('Title')?.value);
      }

      if (this.editServiceForm.get('Price')?.value) {
        this.data.set('Price', this.editServiceForm.get('Price')?.value);
      }

      if (this.editServiceForm.get('Description')?.value) {
        this.data.set('Description', this.editServiceForm.get('Description')?.value);
      }

      console.log(this.editServiceForm.value);

      this.ServiceService.UpdateService(this.data, this.service?.id!)
        .subscribe({
          next: () => {
            this.toastr.success("تم التعديل بنجاح")
            this.router.navigate([".."],{relativeTo:this.activatedRoute});
          },
          error: (error) => {
            console.log(error);
          }
        })

    }
  }
}
