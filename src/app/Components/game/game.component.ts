import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Models/Hero';
import { Villan } from '../../Models/Villan';
import { Game } from '../../Models/Game';
import { Result } from '../../Models/Result';
import { HeroService } from '../../Services/hero.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  heroList: Hero[]
   = [
    { heroID: 5, heroName: 'Dion', minDice: 1, maxDice: 6, uses: 3 },
    { heroID: 5, heroName: 'Anh', minDice: 1, maxDice: 3, uses: 3 },
  ];
  villanList: Villan[] = [
    { villanID: 2, villanName: 'Shano', attackPoints: 5 },
    { villanID: 3, villanName: 'NotBad', attackPoints: 5 },
  ];
  resultList: Game[] = [{ gameTime: new Date(), winner: 'Villan Wins' }];
  selectedVillan: Villan;
  selectedHero: Hero;
  villansLost: boolean = false;
  heroesLost: boolean = false;
  startBtnDisabled: boolean = false;
  rollBtnDisabled: boolean = true;
  resultWinner: string;
  aa: HeroService;

  constructor(private _heroService: HeroService) {}

  ngOnInit() {}

  StartBtn(): void {
    //disables startBtn
    this.startBtnDisabled = true;
    console.log(this.heroList);

    this._heroService.getAllHeroes().subscribe((hero) => (this.heroList = hero));
    console.log(this.heroList);

    //loads heroes
    //loads villians
  }

  RollBtn(): void {
    let attack = this.randomAttack();
    if (attack > this.selectedVillan.attackPoints) {
      this.selectedVillan.attackPoints = 0;
    } else {
      this.selectedVillan.attackPoints -= attack;
    }

    this.selectedHero.uses -= 1;
    this.selectedHero = null;
    this.selectedVillan = null;
    this.villansLost = this.chkVillansLost();
    this.heroesLost = this.chkHeroLost();
    if (this.villansLost === true || this.heroesLost === true) {
      this.resultWinner =
        this.villansLost === false ? 'Villans Won' : 'Heroes Won';
    }
  }

  chkVillansLost(): boolean {
    for (let v of this.villanList) {
      if (v.attackPoints > 0) {
        return false;
      }
    }
    return true;
  }

  chkHeroLost(): boolean {
    for (let h of this.heroList) {
      if (h.uses > 0) {
        return false;
      }
    }
    return true;
  }

  onSelectHero(hero: Hero) {
    if (this.selectedHero === hero) {
      this.selectedHero = null;
    } else {
      if (hero.uses > 0) {
        this.selectedHero = hero;
      }
    }
  }
  onSelectVillan(villan: Villan) {
    if (this.selectedVillan === villan) {
      this.selectedVillan = null;
    } else {
      if (villan.attackPoints > 0) {
        this.selectedVillan = villan;
      }
    }
  }

  randomAttack(): number {
    const roll =
      Math.floor(
        Math.random() *
          (this.selectedHero.maxDice - this.selectedHero.minDice + 1)
      ) + this.selectedHero.minDice;
    console.log(roll);
    return roll;
  }
}
