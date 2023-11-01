import { Component, Input } from '@angular/core';
import { IService } from 'src/app/Models/IService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PromoCodeservice } from 'src/app/Services/PromoCode.service';


@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css'],
})
export class CreateOfferComponent {
  offerForm: FormGroup;
  formIsValid = false;
  data: any;
  constructor(
    private formBuilder: FormBuilder,
    private PromoCodeservice: PromoCodeservice) {
    this.data = new FormData();
    this.offerForm = this.formBuilder.group({
      Code: [null, [Validators.required]],
      Discount: [null, [Validators.required]],
      Limit: [null, [Validators.required]],
      // Count: [null, [Validators.required]],
      //  StartDate: [null],
      ExpirationDate: [null, [Validators.required]],
    });

    this.offerForm.statusChanges.subscribe(() => {
      this.formIsValid = this.offerForm.valid;
    });
  }
  getCurrentDateTime(): string {
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString('en-US', {
     
      hour: '2-digit',
      minute: '2-digit',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return formattedDateTime;
  }
  submitOffer() {
    this.data = {
      Code: this.offerForm.get('Code')?.value,
      ServiceID: this.service?.id,
      Discount: this.offerForm.get('Discount')?.value,
      Limit: this.offerForm.get('Limit')?.value,
      // StartDate: this.offerForm.get('StartDate')?.value,
      ExpirationDate: this.offerForm.get('ExpirationDate')?.value,
    };
    console.log(this.data);
    this.PromoCodeservice.AddPromocode(this.data).subscribe((response) =>
      console.log(response)
    );
  }

  @Input() service: IService | null = null;
}
