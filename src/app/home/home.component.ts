import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const options = {
        strings: ["FRONTEND DEVLOPER", "BACKEND DEVLOPER", "MEAN STACK DEVLOPER", "FREELANCER"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        showCursor: false
      };

      new Typed("#typing-effect", options);
    }
  }
}