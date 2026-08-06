// POO con JavaScript: una clase modela cada testimonio
class Testimonio {
  constructor(nombre, empresa, texto) {
    this.nombre = nombre;
    this.empresa = empresa;
    this.texto = texto;
  }

  // Método que devuelve el HTML de la tarjeta
  aHTML() {
    return `
      <article class="card"> <!-- Cambiado de tarjeta a card -->
        <p>"${this.texto}"</p>
        <strong>${this.nombre}</strong>
        <span>${this.empresa}</span>
      </article>`;
  }
}

// Clase que administra la sección completa
class SeccionTestimonios {
  constructor(selector) {
    this.contenedor = document.querySelector(selector);
    this.testimonios = [];
  }

  agregar(testimonio) {
    this.testimonios.push(testimonio);
  }

  render() {
    // Si no encuentra el contenedor en el HTML, evita que truene el código
    if (!this.contenedor) return; 

    this.contenedor.innerHTML = this.testimonios
      .map((t) => t.aHTML())
      .join("");
  }
}

// Uso
const seccion = new SeccionTestimonios("#testimonios");
seccion.agregar(new Testimonio("Ana López", "EcoTienda", "Aumenté mis ventas un 40%."));
seccion.agregar(new Testimonio("Luis Mora", "TechStart", "La mejor decisión para mi negocio."));
seccion.render();