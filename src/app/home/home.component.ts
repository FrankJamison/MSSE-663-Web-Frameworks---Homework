import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'AncientWhiteArmyVet\'s RPG Tools Website';
  subTitle = 'D&D 5E Pre-Generated Characters';
  isAuth: boolean;

  artificers = [{
    name: 'Frendat Smeltfoot',
    race: 'Gnome: Deep (Svirfneblin)',
    class: 'Artificer',
    build: 'Alchemist'
  }, { 
    name: 'Thurlow Smith',
    race: 'Human',
    class: 'Artificer',
    build: 'Armorer (UA)'
   }, {
    name: 'Fenphina d\'Sivis',
    race: 'Gnome: Mark of Scribing',
    class: 'Artificer',
    build: 'Artillerist'
   }, {
    name: 'Kars\'ten Gi\'parakk',
    race: 'Gith: Githyanki',
    class: 'Artificer',
    build: 'Battle Smith'
   }];

   barbarians = [{
    name: 'Vamana Firehammer',
    race: 'Dwarf: Gray (Duergar)',
    class: 'Barbarian',
    build: 'Path of the Ancestral Guardian'
  }, { 
    name: 'Orikour Whiteforge',
    race: 'Dwarf: Mountain',
    class: 'Barbarian',
    build: 'Path of the Battlerager'
  }, {
    name: 'Fasken Stronghorn',
    race: 'Minotaur',
    class: 'Barbarian',
    build: 'Path of the Beast (UA)'
  }, {
    name: 'Amethyst Whitestone',
    race: 'Genasi: Earth',
    class: 'Barbarian',
    build: 'Path of the Berserker'
  }, { 
    name: 'Varthan Rockhide Nulakelo',
    race: 'Goliath',
    class: 'Barbarian',
    build: 'Path of the Storm Herald'
  }, {
    name: 'Urodak Skullcleaver',
    race: 'Orc of Exandria',
    class: 'Barbarian',
    build: 'Path of the Totem Warrior'
  }, {
    name: 'Eloneus Feyborn',
    race: 'Centaur',
    class: 'Barbarian',
    build: 'Path of the Wild Soul (UA)'
  }, {
    name: 'Mahogany Winterwolf',
    race: 'Shifter: Beasthide',
    class: 'Barbarian',
    build: 'Path of the Zealot'
  }]; 

  constructor() { }

  ngOnInit(): void {
    this.isAuth = true;
  }
}
