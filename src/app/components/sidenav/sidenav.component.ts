import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  isOpen = false;

  @ViewChild('sidenav')
  sidenavElement!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.sidenavElement.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

}
