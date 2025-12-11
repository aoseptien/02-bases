import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  name = signal('');
  power = signal<number | null>(null);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 3000 },
    // { id: 4, name: 'Krillin', power: 2000 },
    // { id: 5, name: 'Yamcha', power: 500 },
  ]);

  addCharacter() {
    const powerValue = this.power();
    if (!this.name() || !powerValue || powerValue <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: powerValue,
    };

    this.characters.update((list) => [...list, newCharacter]);

    this.name.set('');
    this.power.set(null);
  }
}
