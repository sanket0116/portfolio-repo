import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-edu',
  standalone: true,
  imports: [],
  templateUrl: './edu.component.html',
  styleUrl: './edu.component.css'
})

export class EduComponent implements OnInit {
  educationProgress = 0;
  experienceProgress = 0;
  animationStarted = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkIfInView();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkIfInView();
    }
  }

  checkIfInView(): void {
    if (isPlatformBrowser(this.platformId)) {
      const componentPosition = document.querySelector('.edu-container')?.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (componentPosition && componentPosition < viewportHeight && !this.animationStarted) {
        this.animateProgress();
        this.animationStarted = true;
      }
    }
  }

  animateProgress() {
    const interval = setInterval(() => {
      if (this.educationProgress < 100) {
        this.educationProgress += 1;
      }
      if (this.experienceProgress < 100) {
        this.experienceProgress += 1;
      }
      if (this.educationProgress >= 100 && this.experienceProgress >= 100) {
        clearInterval(interval);
      }
    }, 50); 
  }
}