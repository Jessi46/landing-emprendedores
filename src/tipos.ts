export interface IContacto {
  readonly id: number;
  nombre: string;
  correo: string;
  mensaje: string;
}

export type TipoPlan = 'gratis' | 'estandar' | 'premium';

export type Resultado<T> = {
  ok: boolean;
  datos: T;
};