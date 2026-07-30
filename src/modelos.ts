import { IContacto, TipoPlan } from "./tipos.js";

// Clase base abstracta
export abstract class Persona {
  constructor(
    public readonly id: number,
    public nombre: string,
    protected correo: string
  ) {}

  // Método abstracto: cada hija lo implementa distinto (POLIMORFISMO)
  abstract presentar(): string;
}

// HERENCIA: Lead extiende Persona
export class Lead extends Persona {
  #plan: TipoPlan;          // ENCAPSULAMIENTO: privado real

  constructor(id: number, nombre: string, correo: string, plan: TipoPlan) {
    super(id, nombre, correo);
    this.#plan = plan;
  }

  get plan(): TipoPlan {
    return this.#plan;
  }

  set plan(nuevo: TipoPlan) {
    this.#plan = nuevo;
  }

  presentar(): string {
    return `${this.nombre} está interesado en el plan ${this.#plan}`;
  }
}

// Segunda clase hija: otra implementación del mismo método
export class Suscriptor extends Persona {
  #fechaAlta: string;

  constructor(id: number, nombre: string, correo: string) {
    super(id, nombre, correo);
    this.#fechaAlta = new Date().toLocaleDateString();
  }

  presentar(): string {
    return `${this.nombre} se suscribió el ${this.#fechaAlta}`;
  }
}