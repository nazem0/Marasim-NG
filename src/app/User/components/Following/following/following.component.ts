import { IVendor } from './../../../../Models/IVendor';
import { Component } from '@angular/core';
@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent {

   vendors : any[] =[{ name: "محموداحمد",
    category: "مصور فوتوغرافي",

  },{ name: "قاعة لامور ",
  category: "قاعة افراح",

}]


  unfolow (){

  }


  }






