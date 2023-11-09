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
  today = new Date().toISOString().split('T')[0];


  constructor( 
    private formBuilder: FormBuilder,
    private PromoCodeservice: PromoCodeservice) {
      console.log(this.service);
      console.log(this.service?.price);
    this.data = new FormData();
    this.offerForm = this.formBuilder.group({
      Code: [null, [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z][a-zA-Z0-9]{2,7}$')]],
      Discount: [null, [Validators.required, Validators.min(1),Validators.max(this.service?.price??1)]],
      Limit: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      
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
      ExpirationDate: this.offerForm.get('ExpirationDate')?.value,
    };
    console.log(this.data);
    this.PromoCodeservice.Add(this.data).subscribe((response) =>
      console.log(response) 

    );

  }
  DeleteOffer(){
    this.PromoCodeservice.Delete(this.service?.id!).subscribe({
      next(value) {
      },
    }) 
  }
  calculateNewPrice(oldPrice: number, discount: number): number {
    return oldPrice - discount;
  }
  showNewPrice(oldPrice: number, discount: number) :any {
    const newPrice = oldPrice - discount;
  }

  @Input() service: IService | null = null;
  
}
