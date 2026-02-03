import { Component, AfterViewInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  standalone: true
})
export class Menu implements AfterViewInit{
  isScrolled = false;
  isMobileMenuOpen = false;

  private router = inject(Router);

  @HostListener('window:scroll')
  onScroll() {
    // transition when scrolled past top of viewport height
    this.isScrolled = window.scrollY > window.innerHeight * 0.15;
  }

  ngAfterViewInit() {
    // check initial scroll position
    this.onScroll();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  goHome() {
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    } else {
      // if already on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  scrollTo(anchorId: string) {
    this.isMobileMenuOpen = false;

    // if not on homepage, navigate there first
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        // wait for navigation and rendering
        setTimeout(() => {
          this.performScroll(anchorId);
        }, 100);
      });
    } else {
      this.performScroll(anchorId);
    }
  }

  private performScroll(anchorId: string) {
    const element = document.getElementById(anchorId);
    if (!element) return;
    
    const navHeight = 64;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}