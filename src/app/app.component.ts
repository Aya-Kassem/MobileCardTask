import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileCardWithImageComponent } from './Core/mobile-card-with-image/mobile-card-with-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MobileCardWithImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MobileCardTask';
  currentDate: Date = new Date();
}
