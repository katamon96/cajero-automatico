const userNameElement = document.querySelector('#userName');

const userName = localStorage.getItem('nombre');
if (userName) {
    userNameElement.textContent = `${userName}`;
}

const modal = document.querySelector('#modalSaldoCont');

const saldoDisp = localStorage.getItem('saldo');
if (saldoDisp) {
    modal.textContent = `${saldoDisp}`;
}

const modalIngreso = document.querySelector('#modalIngresoCont');
const formu = modalIngreso.querySelector('#formIngresar');

formu.addEventListener('submit', e=>{
e.preventDefault();
console.log(e.target.formCantidad.value);    

});

