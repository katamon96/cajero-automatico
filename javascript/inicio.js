const userNameElement = document.querySelector('#userName');
const modaluserSaldo = document.querySelector('#modalSaldoCant');
const modalIngreso = document.querySelector('#modalIngresoCant');
const saldoIngreso = modalIngreso.querySelector('#formIngresar');
const modalRetiro = document.querySelector('#modalRetiroCant');
const saldoRetirar = modalRetiro.querySelector('#formRetirar');



const userName = localStorage.getItem('nombre');
    if (userName) {
        userNameElement.textContent = `${userName}`;
    }


const saldoDisp = localStorage.getItem('saldo');
    if (saldoDisp) {
        modaluserSaldo.textContent = `${"$"+saldoDisp+" Pesos"}`;
    }
    

    saldoIngreso.addEventListener('submit', e=>{
        e.preventDefault();
        const eventoIngreso = e.target.formCantidad.value;
        console.log(eventoIngreso);
        console.log(deposito(saldoDisp, eventoIngreso));

        if(deposito(saldoDisp, eventoIngreso) > 990){
            alert('Su tipo de cuenta no puede superar los $990 pesos, favor de ingresar una cantidad menor de Deposito')
        } else{
            alert("Monto ingresado: "+eventoIngreso);
            alert("Nuevo Saldo Total: "+deposito(saldoDisp,eventoIngreso)+" Pesos");
        //modalIngreso.textContent = `${" Saldo Total: "+deposito(saldoDisp, eventoIngreso)+" Pesos"}`;
        }
    });

  function deposito (saldoDisp, eventoIngreso){
    const numDisp = parseInt(saldoDisp);
    const numIngreso = parseInt(eventoIngreso);
    const suma = numDisp+numIngreso;
    return suma;
    }

  saldoRetirar.addEventListener('submit', e=>{
    e.preventDefault();
    const eventoRetirar = e.target.typeRetirar.value;
    console.log(eventoRetirar);
    console.log(retirar(saldoDisp, eventoRetirar));
    if(retirar(saldoDisp, eventoRetirar) < 10){
        alert('Su tipo de cuenta no puede quedarse con menos de $10 pesos, favor de ingresar una cantidad menor de Retiro')
    } else{
        alert("Monto Retirado: "+eventoRetirar);
        alert("Nuevo Saldo Total: "+retirar(saldoDisp,eventoRetirar)+" Pesos");
    //modalRetiro.textContent = `${" Saldo Total: "+retirar(saldoDisp, eventoRetirar)+" Pesos"}`
    }
    });
    
    function retirar  (saldoDisp, eventoRetirar){
        const numDisp = parseInt(saldoDisp);
        const numRetirar = parseInt(eventoRetirar);
        const resta = numDisp-numRetirar;
        return resta;
      }

   