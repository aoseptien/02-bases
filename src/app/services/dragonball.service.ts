import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonballService {
  // Estado centralizado
  characters = signal<Character[]>(loadFromLocalStorage());

  // Effect para guardar en localStorage cada vez que cambian los personajes
  saveToLocalStorage = effect(() => {
    // console.log(`Characters count: ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

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
