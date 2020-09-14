import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'AncientWhiteArmyVet\'s RPG Tools Website';
  subTitle = 'D&D 5E Pre-Generated Characters';
  

  constructor() { }

  ngOnInit(): void { }
}