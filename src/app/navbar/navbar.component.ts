import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})

export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller){}
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  scrollToSection(section: string): void {
    const yOffset = 90; // 20px margin from the top
    const element = document.getElementById(section);
  
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get the position of the element
      const offsetPosition = elementPosition - yOffset; 
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' 
      });
    }
  }
}