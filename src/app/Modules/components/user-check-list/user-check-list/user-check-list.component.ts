import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-check-list',
  templateUrl: './user-check-list.component.html',
  styleUrls: ['./user-check-list.component.css']
})
export class UserCheckListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initializeTaskList();
    this.initializeWeddingDateCountdown();
  }

  initializeTaskList() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
      task.addEventListener('click', () => {
        task.classList.toggle('checked');
      });
    });
  }

  initializeWeddingDateCountdown() {
    const weddingDateInput = document.getElementById('wedding_date') as HTMLInputElement;
    const remainingDaysElement = document.getElementById('remaining_days');
  
    weddingDateInput?.addEventListener('change', () => {
      const weddingDateValue = weddingDateInput.value;
      const weddingDate = new Date(weddingDateValue).getTime(); // Convert to timestamp
      const currentDate = new Date().getTime(); // Convert to timestamp
      const difference = weddingDate - currentDate;
  
      const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
  
      // Check if remainingDaysElement is not null before setting textContent
      if (remainingDaysElement) {
        remainingDaysElement.textContent = daysRemaining > 0 ? daysRemaining.toString() :
          daysRemaining === 0 ? "اليوم عيد زفافك , نتمني لك حياة زوجية سعيدة" :
            "بالرفاء والبنين";
      }
    });
  }
  
  }
  

