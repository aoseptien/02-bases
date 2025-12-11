import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character.interface';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.html',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperPage {
  name = signal('');
  power = signal<number | null>(null);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter() {
    const nameValue = this.name().trim();
    const powerValue = this.power();

    // Validaciones simples
    if (!nameValue) {
      alert('⚠️ El nombre del personaje es requerido');
      return;
    }

    if (!powerValue || powerValue <= 500) {
      alert('⚠️ El nivel de poder debe ser mayor a 500');
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: nameValue,
      power: powerValue,
    };

    this.characters.update((list) => [...list, newCharacter]);

    this.name.set('');
    this.power.set(null);
  }
}
