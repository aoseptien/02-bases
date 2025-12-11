import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  // selector: 'app-hero-page',
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe],
})
export class HeroPage {
  nameSignal = signal('Ironman');
  ageSignal = signal(45);

  heroDescription = computed(() => {
    const description = `${this.nameSignal()} - ${this.ageSignal()} años`;
    return description;
  });

  getHeroDescription() {
    return `${this.nameSignal()} - ${this.ageSignal()} años`;
  }

  changeHero() {
    this.nameSignal.set('Spiderman');
    this.ageSignal.set(22);
  }

  changeAge() {
    this.ageSignal.update((current) => current + 1);
  }

  resetForm() {
    this.nameSignal.set('Ironman');
    this.ageSignal.set(45);
  }

  nameCapitalized() {
    return this.nameSignal().toUpperCase();
  }

  capitalizedName = computed(() => {
    return this.nameSignal().toUpperCase();
  });
}
