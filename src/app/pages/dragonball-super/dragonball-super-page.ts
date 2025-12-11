import { Component, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.html',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperPage {
  private dragonballService = inject(DragonballService);

  // Solo inputs del usuario
  name = signal('');
  power = signal<number | null>(null);

  // Estado viene del servicio
  characters = this.dragonballService.characters;

  addCharacter() {
    const powerValue = this.power();
    if (!powerValue) return;

    const success = this.dragonballService.addCharacter(this.name(), powerValue);

    // Solo limpia si se agregó exitosamente
    if (success) {
      this.name.set('');
      this.power.set(null);
    }
  }
}
