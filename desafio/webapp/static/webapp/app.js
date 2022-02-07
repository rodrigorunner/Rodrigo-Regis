const modal = document.querySelector('#myModal');
const btn = document.querySelector('#myBtn');
const span = document.querySelector('.close');
const form = document.querySelector('form');
const container = document.querySelector('#container');
const info = document.querySelector('#info');
let textEl = document.querySelector('#text');

btn.addEventListener('click', () => {
  modal.style.display = "block";
}) 

span.addEventListener('click', () => {
  modal.style.display = "none";
})

window.addEventListener('click', e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}) 

form.addEventListener('submit', e => {
  e.preventDefault();

  if(form.elements.name.value === '' || form.elements.brand.value === '') {
    showAlert('Todos os campos são necessários.', 'error')
  } else { 
    const shipName = form.elements.name.value;
    const shipBrand = form.elements.brand.value;
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${shipName}</td>
        <td>${shipBrand}</td>
    `
    form.elements.name.value = '';
    form.elements.brand.value = '';
    
    container.appendChild(row);
  }
})

const showAlert = (message, className) => {
  const p = document.createElement('p');
  p.className = `alert ${className}`;
  p.appendChild(document.createTextNode(message));
  const parent = document.querySelector('.modal-body');
  parent.insertBefore(p, form);

  setTimeout(() => {
      document.querySelector('.alert').remove();
  }, 3000);
}



