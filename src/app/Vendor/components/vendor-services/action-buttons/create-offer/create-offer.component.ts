import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IService } from 'src/app/Models/IService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PromoCodeservice } from 'src/app/Services/PromoCode.service';


@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css'],
})
export class CreateOfferComponent {
  @Input() service: IService | null = null;
  @Output() refresh = new EventEmitter();
  offerForm: FormGroup;
  formIsValid = false;
  data: FormData;
  today = new Date().toISOString().split('T')[0];


  constructor(
    private formBuilder: FormBuilder,
    private PromoCodeservice: PromoCodeservice) {
    // console.log(this.service);
    // console.log(this.service?.price);
    this.data = new FormData();
    this.offerForm = this.formBuilder.group({
      Code: [null, [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z][a-zA-Z0-9]{2,7}$')]],
      Discount: [null, [Validators.required, Validators.min(1), Validators.max(this.service?.price!)]],
      Limit: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      ExpirationDate: [null, [Validators.required]],
    });

    this.offerForm.statusChanges.subscribe(() => {
      this.formIsValid = this.offerForm.valid;
    });
  }



  submitOffer() {
    if (this.formIsValid) {
      this.data.set('Code', this.offerForm.get('Code')?.value);
      this.data.set('ServiceID', (this.service?.id)?.toString()!);
      this.data.set('Discount', this.offerForm.get('Discount')?.value);
      this.data.set('Limit', this.offerForm.get('Limit')?.value);
      this.data.set('ExpirationDate', this.offerForm.get('ExpirationDate')?.value);

      console.log(this.offerForm.value);

      this.PromoCodeservice.Add(this.data)
        .subscribe({
          next: (data) => {
            console.log("PromoCode Added")
            this.refresh.emit();
          },
          error: (error) => {
            console.log(error);
          }
        });
    }
  }

  DeleteOffer() {
    this.PromoCodeservice.Delete(this.service?.id!)
      .subscribe({
        next: (data) => {
          console.log("PromoCode Deleted")
          this.refresh.emit();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  calculateNewPrice(oldPrice: number, discount: number): number {
    return oldPrice - discount;
  }

  showNewPrice(oldPrice: number, discount: number): any {
    const newPrice = oldPrice - discount;
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

}
