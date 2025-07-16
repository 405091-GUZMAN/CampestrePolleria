import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    RouterLink,
    RouterOutlet

  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
