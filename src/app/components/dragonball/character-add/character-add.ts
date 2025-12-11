import { Component, input, output, WritableSignal } from '@angular/core';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = input.required<WritableSignal<string>>();
  power = input.required<WritableSignal<number | null>>();
  addCharacter = output<void>();
}
