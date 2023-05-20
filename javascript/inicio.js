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
    saveToLocalStorage(form);
    modalIngreso.textContent = `${formu}`;

    });

    function saveToLocalStorage({inputIngresar}) {
        const { value: cantidadIngreso} = inputIngresar;
        const suma = cuentas.find( cuentas.saldo + suma.cantidadIngreso)
        for (prop in acc) {
            localStorage.setItem(prop, suma[prop]);
        }
    }


/*function saveToLocalStorage({ userName, userPassword }) {
    const { value: user } = userName;
    const { value: pass } = userPassword;
    const acc = cuentas.find(acc => acc.nombre === user && acc.password === pass);

    // Guarda los valores en el almacenamiento local
    for (prop in acc) {
        localStorage.setItem(prop, acc[prop]);
    }
}


function showAlert({ message }) {
    alert(message);
}*/