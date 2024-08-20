import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Input, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-card-with-image',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './mobile-card-with-image.component.html'
})

export class MobileCardWithImageComponent {
  @Input() date!: Date;
  private readonly platformId = inject(PLATFORM_ID);
  src!: string;
  constructor(private _Router: Router) { }
  ngOnInit() {
    this.onWindowResize();    
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 550) {
        this.src = 'mobile-img.png';
      } else {
        this.src = 'lg-mobile-img.png';
      }
    }
  }

  done() {
    console.log('Done Is Triggered!');
  }

  callUs() {
    window.location.href = 'tel:+1234567890';
  }

  visitOurWebSite() {
    this._Router.navigate(['']);
  }
}
