document.querySelector('.formulario form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Obrigado por entrar em contato! Nós retornaremos em breve.');
    event.target.reset();
});