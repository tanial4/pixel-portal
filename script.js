const dropdownButton = document.getElementById('boton-barra');
const dropdownContent = document.getElementById('menu-desp');

dropdownButton.addEventListener('click', function() {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

document.addEventListener('click', function(event) {
    if (!dropdownButton.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;

        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validación de campos
    const nombre = contactForm.nombre.value.trim();
    const email = contactForm.email.value.trim();
    const telefono = contactForm.telefono.value.trim();
    const mensaje = contactForm.mensaje.value.trim();

    if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
    } else if (!validateEmail(email)) {
        alert("El correo electrónico ingresado no es válido.");
    } else if (!validatePhone(telefono)) {
        alert("El número de teléfono ingresado no es válido.");
    } else {
        // Envío del formulario (aquí puedes agregar código para enviar los datos a un servidor)
        alert("¡Hola "+nombre +"!, gracias por el interes, pronto nos pondremos en contacto contigo.(:");
        contactForm.reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(telefono) {
    // Asumimos que el número de teléfono debe contener solo dígitos y tener una longitud de 10 dígitos
    const re = /^\d{10}$/;
    return re.test(telefono);
}