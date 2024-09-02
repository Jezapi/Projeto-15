document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = '#12C2E8'; 
    });
    item.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = ''; 
    });
});

document.querySelectorAll('.acesse').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.color = '#12C2E8'; 
    });
    item.addEventListener('mouseout', event => {
        event.target.style.color = ''; 
    });
});

document.querySelectorAll('.enviar').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = '#000637';
        event.target.style.color = '#ffffff'
    });
    item.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = '';
        event.target.style.color = '#000637'
    });
});