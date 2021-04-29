import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Hero} from '../../hero.model';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Hero[] = [];
  heroSub: Subscription = undefined;


  constructor(private heroService: HeroService) { }


  ngOnInit(): void {
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes);
  }

  addHero(name: string): void {
    this.heroSub = this.heroService.createHero(name).subscribe(hero => this.heroes.push(hero));
  }

  rename(hero: Hero): void {
    const existingHero = {id: hero.id, name: 'Lalala'};
    this.heroService.editHero(hero.id, existingHero).subscribe( result => {
      const locHero = this.heroes.find(value => value.id === hero.id);
      if (locHero){
        locHero.name = 'Lalala';
      }
    });
  }

  remove(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(
      result => {
        this.heroes = this.heroes.filter(value => value !== hero);
      }
    );
  }

}
