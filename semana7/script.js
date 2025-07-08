// Array inicial de productos
const products = [
    {
        name: "Laptop Ultraligera",
        price: 999.99,
        description: "Ideal para trabajo y estudio, con gran rendimiento."
    },
    {
        name: "Teclado Mecánico RGB",
        price: 75.50,
        description: "Experiencia de escritura superior con iluminación personalizable."
    },
    {
        name: "Ratón Inalámbrico Ergonómico",
        price: 25.00,
        description: "Diseño cómodo para largas horas de uso."
    },
    {
        name: "Monitor Full HD 24 pulgadas",
        price: 150.00,
        description: "Colores vibrantes y gran claridad para tu espacio de trabajo."
    }
];

// Función para generar la plantilla HTML de un producto
function createProductTemplate(product) {
    return `
        <li>
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        </li>
    `;
}

// Función para renderizar la lista de productos en el DOM
function renderProducts() {
    const productListUL = document.getElementById('product-list');
    productListUL.innerHTML = ''; // Limpiar la lista antes de volver a renderizar

    products.forEach(product => {
        productListUL.innerHTML += createProductTemplate(product);
    });
}

// Función para agregar un nuevo producto (ejemplo)
function addNewProduct() {
    const newProduct = {
        name: `Producto Nuevo ${products.length + 1}`,
        price: (Math.random() * 100) + 10, // Precio aleatorio entre 10 y 110
        description: "Una descripción genérica para el nuevo producto."
    };
    products.push(newProduct);
    renderProducts(); // Volver a renderizar la lista para incluir el nuevo producto
}

// Cargar la lista de productos cuando la página se carga
document.addEventListener('DOMContentLoaded', renderProducts);

// Asignar el evento al botón de agregar producto
document.getElementById('add-product-btn').addEventListener('click', addNewProduct);