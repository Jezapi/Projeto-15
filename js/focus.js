document.querySelectorAll('.formulario input, .formulario textarea').forEach(item => {
    item.addEventListener('focus', event => {
        event.target.style.borderColor = '#12C2E8';
    });
    item.addEventListener('blur', event => {
        event.target.style.borderColor = ''; 
    });
});