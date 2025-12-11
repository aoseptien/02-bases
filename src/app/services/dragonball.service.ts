import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  // Estado centralizado
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegueta', power: 8000 },
  ]);

  // Método que recibe los datos desde el componente
  addCharacter(name: string, power: number): boolean {
    const nameValue = name.trim();

    // Validaciones simples
    if (!nameValue) {
      alert('⚠️ El nombre del personaje es requerido');
      return false;
    }

    if (!power || power <= 500) {
      alert('⚠️ El nivel de poder debe ser mayor a 500');
      return false;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: nameValue,
      power: power,
    };

    this.characters.update((list) => [...list, newCharacter]);
    return true;
  }
}
