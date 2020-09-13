import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have authenticated', () => {
    component.ngOnInit();
    expect(component.isAuth).toBeTruthy();
  });

  it('should have a artificers', () => {
    const artificers = [
      {
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
      }
    ];
    expect(component.artificers).toEqual(artificers);
  });

  it('should have a barbarians', () => {
    const barbarians = [
      {
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
      }
    ];
    expect(component.barbarians).toEqual(barbarians);
  });
});
