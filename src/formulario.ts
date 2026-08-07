// Tipo personalizado para los datos del formulario
interface IContacto {
  nombre: string;
  correo: string;
  plan: string;
}

export class GestorFormulario {
  guardarJSON(): any {
    throw new Error("Method not implemented.");
  }
  private contactos: IContacto[] = [];
  private form: HTMLFormElement;
  private error: HTMLElement;

  constructor(formSelector: string, errorSelector: string) {
    this.form = document.querySelector(formSelector) as HTMLFormElement;
    this.error = document.querySelector(errorSelector) as HTMLElement;
    this.form.addEventListener("submit", (e) => this.enviar(e));
  }

  // Función tipada: recibe strings, devuelve boolean
  private validar(nombre: string, correo: string): boolean {
    if (nombre.trim().length < 3) {
      this.error.textContent = "El nombre debe tener al menos 3 caracteres";
      return false;
    }
    if (!correo.includes("@")) {
      this.error.textContent = "Correo inválido";
      return false;
    }
    this.error.textContent = "";
    return true;
  }

  private enviar(evento: Event): void {
    evento.preventDefault();
    const datos = Object.fromEntries(new FormData(this.form));
    const nombre = String(datos.nombre);
    const correo = String(datos.correo);

    if (!this.validar(nombre, correo)) return;

    this.contactos.push({ nombre, correo, plan: String(datos.plan) });
    console.log("Contactos (JSON):", JSON.stringify(this.contactos, null, 2));
    this.form.reset();
  }
}

new GestorFormulario("#formulario", "#error");