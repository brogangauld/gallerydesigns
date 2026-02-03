import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  standalone: true
})
export class Menu implements AfterViewInit{
  isScrolled = false;
  isMobileMenuOpen = false;

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

  scrollTo(anchorId: string) {
    const element = document.getElementById(anchorId);
    if (!element) return;
    
    this.isMobileMenuOpen = false;
    
    const navHeight = 64;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}