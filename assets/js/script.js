document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function enviarMensaje() {
    alert("¡Mensaje enviado con éxito!");
  }
