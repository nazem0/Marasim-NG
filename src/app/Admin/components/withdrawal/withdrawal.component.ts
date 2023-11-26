import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithdrawalComponent implements OnInit {

  ngOnInit(): void { }

}
