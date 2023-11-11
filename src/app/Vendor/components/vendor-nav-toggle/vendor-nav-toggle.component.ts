import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-vendor-nav-toggle',
  templateUrl: './vendor-nav-toggle.component.html',
  styleUrls: ['./vendor-nav-toggle.component.css']
})
export class VendorNavToggleComponent {
  menu: HTMLElement | null = null;
  isDragging = false;
  offsetX = 0;
  offsetY = 0;

  ngAfterViewInit() {
    this.menu = document.querySelector(".menu");
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (this.menu) {
      this.isDragging = true;
      this.offsetX = event.pageX - this.menu.getBoundingClientRect().left;
      this.offsetY = event.pageY - this.menu.getBoundingClientRect().top;
      this.menu.classList.add("dragging");
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging && this.menu) {
      let x = event.pageX - this.offsetX;
      let y = event.pageY - this.offsetY;

      let maxX = document.body.clientWidth - (this.menu.offsetWidth || 0);

      x = Math.min(Math.max(x, 0), maxX);

      if (this.menu) {
        this.menu.style.left = `${x - 1820}px`;
        this.menu.style.top = `${y}px`;
      }
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.isDragging && this.menu) {
      this.isDragging = false;
      this.menu.classList.remove("dragging");
    }
  }

  onClick() {
    if (this.menu) {
      this.menu.classList.toggle("active");
    }
  }

  handleItemClick(event: Event) {
    // Handle the item click logic here
    event.preventDefault(); // Prevents the default behavior of the anchor
    console.log('Item Clicked!');
  }
}
