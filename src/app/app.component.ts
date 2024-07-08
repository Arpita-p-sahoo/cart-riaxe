import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('carouselAnimation', [
      state('enter', style({ opacity: 1 })),
      state('leave', style({ opacity: 0 })),
      transition('enter => leave', [
        animate('1s')
      ]),
      transition('leave => enter', [
        animate('1s')
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'cart';

  icons = ['home', 'star', 'favorite', 'account_circle', 'search']; // List of icons
  currentIcon: string = '';
  iconIndex = 0;
  iconState = 'enter';

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    this.currentIcon = this.icons[this.iconIndex];
    setInterval(() => {
      this.iconState = 'leave';
      setTimeout(() => {
        this.iconIndex = (this.iconIndex + 1) % this.icons.length;
        this.currentIcon = this.icons[this.iconIndex];
        this.iconState = 'enter';
      }, 1000); // Duration of the leave animation
    }, 2000); // 1 second for fade-out + 1 second for fade-in
  }
}
