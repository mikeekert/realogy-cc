import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const nav = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
       nav.classList.add('header--small');
      } else {
        nav.classList.remove('header--small');
      }
    });
  }

}
