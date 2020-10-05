import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface NavLinks {
  title: string;
  fragment: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  title = 'AncientWhiteArmyVet\'s RPG Tools Website';
  links: NavLinks[] = [
    { title: 'Heroes', fragment: '/heroes' },
    { title: 'Login', fragment: '/login' },
  ];

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}
}
