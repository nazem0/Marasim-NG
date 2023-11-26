import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-governorates-map',
  templateUrl: './governorates-map.component.html',
  styleUrls: ['./governorates-map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GovernoratesMapComponent implements AfterViewInit {

  governoratesTable = [
    { id: 1, mapCode: 'EGY1533', name: 'القاهرة' },
    { id: 2, mapCode: 'EGY1544', name: 'الجيزة' },
    { id: 3, mapCode: 'EGY1543', name: 'الأسكندرية' },
    { id: 4, mapCode: 'EGY1537', name: 'الدقهلية' },
    { id: 5, mapCode: 'EGY1556', name: 'البحر الأحمر' },
    { id: 6, mapCode: 'EGY1541', name: 'البحيرة' },
    { id: 7, mapCode: 'EGY1542', name: 'الفيوم' },
    { id: 8, mapCode: 'EGY1530', name: 'الغربية' },
    { id: 9, mapCode: 'EGY1531', name: 'الإسماعيلية' },
    { id: 10, mapCode: 'EGY1532', name: 'المنوفية' },
    { id: 11, mapCode: 'EGY1545', name: 'المنيا' },
    { id: 12, mapCode: 'EGY1534', name: 'القليوبية' },
    { id: 13, mapCode: 'EGY1550', name: 'الوادي الجديد' },
    { id: 14, mapCode: 'EGY1536', name: 'السويس' },
    { id: 15, mapCode: 'EGY1548', name: 'أسوان' },
    { id: 16, mapCode: 'EGY1549', name: 'أسيوط' },
    { id: 17, mapCode: 'EGY1546', name: 'بني سويف' },
    { id: 18, mapCode: 'EGY1538', name: 'بورسعيد' },
    { id: 19, mapCode: 'EGY1539', name: 'دمياط' },
    { id: 20, mapCode: 'EGY1535', name: 'الشرقية' },
    { id: 21, mapCode: 'EGY1557', name: 'جنوب سيناء' },
    { id: 22, mapCode: 'EGY1547', name: 'كفر الشيخ' },
    { id: 23, mapCode: 'EGY1540', name: 'مطروح' },
    { id: 24, mapCode: 'EGY5494', name: 'الأقصر' },
    { id: 25, mapCode: 'EGY1551', name: 'قنا' },
    { id: 26, mapCode: 'EGY1558', name: 'شمال سيناء' },
    { id: 27, mapCode: 'EGY1552', name: 'سوهاج' },
  ];
  ngAfterViewInit(): void {
    let stateElements = document.querySelectorAll(".sm_state")
    stateElements.forEach(stateElement => {
      stateElement.addEventListener('mouseover', () => {
        const stateCode = stateElement.classList.item(1); // Assuming the state code is the second class
        const governorateName = this.governoratesTable.find(g => g.mapCode === stateCode)?.name;
  
        if (governorateName) {
          this.showTooltip(governorateName, stateElement as HTMLElement);
        }
      });
  
      stateElement.addEventListener('mouseleave', () => {
        this.hideTooltip();
      });
    });
  }
  
  private showTooltip(content: string, targetElement: HTMLElement): void {
    const tooltip = document.createElement('div');
    tooltip.textContent = content;
    tooltip.classList.add('govDialog');
  
    // Calculate the position of the tooltip relative to the document
    const rect = targetElement.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const tooltipTop = rect.top + scrollTop - tooltip.offsetHeight;
    const tooltipLeft = rect.left;
  
    tooltip.style.top = `${tooltipTop}px`;
    tooltip.style.left = `${tooltipLeft}px`;
  
    document.body.appendChild(tooltip);
  }
  
  private hideTooltip(): void {
    const tooltip = document.querySelectorAll('.govDialog');
    if (tooltip) {
      tooltip.forEach(e=>e.remove());
    }
  }
  getGovernorateIndexByMapCode(mapCode:string){
    return this.governoratesTable.find(g=>g.mapCode == mapCode)?.id;
  }
}