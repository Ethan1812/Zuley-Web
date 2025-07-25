// Array con la información de los productos, esto hace la página más escalable
const productosData = [
  {
    imagen: 'imagenes/Aretes1.jpeg',
    titulo: 'Aretes Sol Naciente',
    descripcion: 'Inspirados en patrones solares y colores dorados. Livianos, elegantes y brillantes.',
    precio: '$18.000'
  },
  {
    imagen: 'imagenes/Manilla1.jpeg',
    titulo: 'Manilla Étnica',
    descripcion: 'Diseño único con alma bohemia. Nudos de macramé y cuentas de madera.',
    precio: '$25.000'
  },
  {
    imagen: 'imagenes/Aretes2.jpeg',
    titulo: 'Aretes Hoja de Oro',
    descripcion: 'Delicados aretes con forma de hoja en tono dorado, perfectos para cualquier ocasión.',
    precio: '$15.000'
  },
  {
    imagen: 'imagenes/Manilla2.jpeg',
    titulo: 'Manilla Océano',
    descripcion: 'Tejida con hilos en tonos azules y turquesa. Evoca la calma del mar.',
    precio: '$20.000'
  },
  {
    imagen: 'imagenes/Aretes3.jpeg',
    titulo: 'Aretes Plumaje',
    descripcion: 'Aretes largos con diseño de plumas, combinando hilos y detalles metálicos.',
    precio: '$22.000'
  },
  {
    imagen: 'imagenes/Manilla3.jpeg',
    titulo: 'Manilla Corazón',
    descripcion: 'Sencilla y elegante. Una manilla con un pequeño corazón tejido en el centro.',
    precio: '$17.000'
  },
  {
    imagen: 'imagenes/Aretes4.jpeg',
    titulo: 'Aretes Gema',
    descripcion: 'Aretes con una piedra simulada en el centro y un tejido que la rodea.',
    precio: '$25.000'
  },
  {
    imagen: 'imagenes/Manilla4.jpeg',
    titulo: 'Manilla Trenzada',
    descripcion: 'Una manilla trenzada con varios hilos de colores, fuerte y duradera.',
    precio: '$19.000'
  },
  {
    imagen: 'imagenes/Aretes5.jpeg',
    titulo: 'Aretes Gotas',
    descripcion: 'Pequeños aretes en forma de gota con un diseño minimalista y moderno.',
    precio: '$12.000'
  },
  {
    imagen: 'imagenes/Manilla5.jpeg',
    titulo: 'Manilla Tribal',
    descripcion: 'Conexión ancestral tejida con hilos encerados en tonos tierra. Fuerte y elegante.',
    precio: '$22.000'
  }
];

// Generar los productos en la página de forma dinámica
const productosGrid = document.getElementById('productos-grid'); // Nuevo ID
productosData.forEach((producto, index) => {
  const productoCard = document.createElement('div');
  productoCard.classList.add('producto-card');
  productoCard.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-info">
      <h3>${producto.titulo}</h3>
      <p class="precio">${producto.precio}</p>
    </div>
  `;
  // Usamos addEventListener para un código más limpio
  productoCard.addEventListener('click', () => mostrarModal(index));
  productosGrid.appendChild(productoCard); // Se agrega al nuevo contenedor
});

// --- LÓGICA DEL CARRUSEL ---
let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = slider.querySelectorAll('img');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const dotsWrapper = document.getElementById('dots-wrapper');
let interval;

// Función para actualizar el carrusel
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

// Función para el siguiente slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

// Función para el slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

// Lógica para los puntos de navegación
function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
    dotsWrapper.appendChild(dot);
  });
}

function updateDots() {
  const dots = dotsWrapper.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Iniciar el carrusel y los puntos
createDots();
updateSlider();
startSlider();

// Controles del carrusel
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function startSlider() {
  interval = setInterval(nextSlide, 5000);
}

function pauseSlider() {
  clearInterval(interval);
}

// Pausar y reanudar el carrusel al pasar el mouse
document.querySelector('.carrusel-header').addEventListener('mouseover', pauseSlider);
document.querySelector('.carrusel-header').addEventListener('mouseout', startSlider);


// --- LÓGICA DEL MODAL ---
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescripcion = document.getElementById('modal-descripcion');
const modalPrecio = document.getElementById('modal-precio');

// Muestra el modal con los datos del producto
function mostrarModal(index) {
  const producto = productosData[index];
  modalImg.src = producto.imagen;
  modalImg.alt = producto.titulo;
  modalTitulo.textContent = producto.titulo;
  modalDescripcion.textContent = producto.descripcion;
  modalPrecio.textContent = producto.precio;
  modal.classList.add('active'); // Usa una clase para controlar la visibilidad
}

// Cierra el modal
function cerrarModal() {
  modal.classList.remove('active');
}

// Event listeners para cerrar el modal
closeModalBtn.addEventListener('click', cerrarModal);

// Cierra el modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    cerrarModal();
  }
});

// Cierra el modal al presionar la tecla 'Escape'
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('active')) {
    cerrarModal();
  }
});


// --- LÓGICA DEL FORMULARIO DE CONTACTO ---
const contactForm = document.getElementById('formulario-contacto');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
  contactForm.reset();
});