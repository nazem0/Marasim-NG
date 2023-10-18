import { Component, OnInit, Renderer2, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.initializeCustomSelects();
    this.registerClickOutsideHandler();
  }

  initializeCustomSelects() {
    const customSelects = this.el.nativeElement.querySelectorAll('.custom-select');
    customSelects.forEach((customSelect: HTMLDivElement) => {
      const select = customSelect.querySelector('select') as HTMLSelectElement;
      const selectedOption = this.renderer.createElement('div');
      this.renderer.addClass(selectedOption, 'select-selected');
      selectedOption.innerHTML = select.options[select.selectedIndex].text;
      this.renderer.appendChild(customSelect, selectedOption);

      const optionsList = this.renderer.createElement('div');
      this.renderer.addClass(optionsList, 'select-items select-hide');

      for (let i = 1; i < select.options.length; i++) {
        const option = this.renderer.createElement('div');
        option.innerHTML = select.options[i].text;
        this.renderer.listen(option, 'click', () => {
          select.selectedIndex = i;
          selectedOption.innerHTML = select.options[i].text;
          this.closeAllSelect(customSelect);
        });
        this.renderer.appendChild(optionsList, option);
      }

      this.renderer.appendChild(customSelect, optionsList);

      this.renderer.listen(selectedOption, 'click', (event: Event) => {
        event.stopPropagation();
        this.closeAllSelect(customSelect);
        optionsList.classList.toggle('select-hide');
        selectedOption.classList.toggle('select-arrow-active');
      });
    });
  }

  closeAllSelect(exclude?: any) {
    const selectItems = this.el.nativeElement.querySelectorAll('.select-items');
    const selectSelected = this.el.nativeElement.querySelectorAll('.select-selected');

    selectItems.forEach((items:Element, index:number) => {
      if (items !== exclude.querySelector('.select-items')) {
        selectSelected[index].classList.remove('select-arrow-active');
        items.classList.add('select-hide');
      }
    });
  }

  registerClickOutsideHandler() {
    this.renderer.listen('document', 'click', () => {
      this.closeAllSelect();
    });
  }
}
