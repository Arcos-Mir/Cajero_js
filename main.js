
/* Cuentas */

let accounts = [
    {name: "Alexander", account: 5421568936891258, pass: 3698, balance: 500},
    {name: "Ashley", account: 5421546821472354, pass: 4551, balance: 480},
    {name: "Maxime", account: 5421598763544521, pass: 8224, balance: 470},
];

let activeSection = ".content_1";

let account = document.querySelector("#userN"); /* obtiene número de cuenta del usuario */
let password = document.querySelector("#password"); /* obtiene el nip del usuario */
let message = document.querySelector(".message") /* muestra mensaje de error cuando la contraseña o el numero de cuenta no coinciden*/
let userName = document.querySelector(".nameUser") /* muestra el nombre del usuario cuando se ha logeado */
let userSal = document.querySelector(".userSaldo") /* cantidad que tiene por defecto el usuario */
let start = document.querySelector(".content_1"); /* página de inicio login */
let user = document.querySelector(".content_2") /* pantalla usuario bienvenido*/
let consult = document.querySelector(".content_3"); /* ingresar a consultar saldo */
let deposit = document.querySelector(".content_4"); /* ingresar a página para depositar saldo */
let extract = document.querySelector(".content_5"); /* ingresar a página para retirar saldo */
let exit = document.querySelector(".content_6");  /* ingresar a página para salir del programa */

function login() {

    const users = accounts.find(item => item.account == account.value && item.pass == password.value);

    if(users){

        localStorage.setItem("Balance", users.balance);
        userName.innerHTML = users.name;
        userSal.innerHTML = users.balance;
        activeSection = ".content_2";
    }else {
        message.innerHTML = "Error al ingresar tu datos, vuelve a intentarlo";
        message.style.color = "white";
        message.style.font = "sanz serif";
        message.style.size = "1.3rem";
        message.style.margin = "10px 0px"
        message.style.padding = "6px 6px"
        message.style.background = "red";
    }

    if (activeSection != ".content_1") {
        start.style.display = "none";
        user.style.display = "block";
        activeSection = ".content_2";
    } 
}

/* ingresar a la pagina para consultar saldo */

function userPage() {

    if (activeSection == ".content_2") {
        user.style.display = "none";
        consult.style.display = "block";
        activeSection = ".content_3";
    }
}

/* ingresar a la pagina para depositar saldo */

function depositPage() {

    if (activeSection == ".content_3") {
        consult.style.display = "none";
        deposit.style.display = "block";
        activeSection = ".content_4";
    }

}

/*---- función del boton para realizar la operación de añadir saldo */

let maxLimit = 990;
let minLimit = 10;
let totalAccount = 0;
let result = document.querySelector("#addTotal"); /* cantidad total que se muestra en pantalla */
let add = document.querySelector("#addMoney"); /* cantidad que coloca el usuario */

function addPage() {

    let current = localStorage.getItem("Balance");

    totalAccount = parseFloat(current) + parseFloat(add.value);

    if ( totalAccount >= minLimit && totalAccount <= maxLimit) {
        /* console.log("agrego a mi cuenta: ", current + add.value); */
        
        localStorage.setItem("Balance", totalAccount);

        result.innerHTML = totalAccount;
        res.innerHTML = totalAccount;
        /* console.log("Resultado es: ", totalAccount); */    
    }else {
        alert("Saldo fuera de Rango");
        /* console.log("Saldo fuera de Rango"); */
    }
}

/* ingresar a la pagina para retirar saldo */

function extractPage() {

    if (activeSection == ".content_4") {
        deposit.style.display = "none";
        extract.style.display = "block";
        activeSection = ".content_5";
    }

}

/*----- función del botón para realizar la operación de extraer saldo */

let totAccount = 0;

let res = document.querySelector("#subsTotal");/* cantidad total que se muestra en pantalla*/
let subs = document.querySelector("#subsMoney");/* cantidad que coloca el usuario */

function substractPage() {

    let actual = localStorage.getItem("Balance");
    console.log("saldo actual es: ", actual);

    totAccount = parseFloat(actual) - parseFloat(subs.value);

    if ( totAccount >= minLimit && totAccount < maxLimit) {
        console.log("retiro de mi cuenta: ", subs.value);
        
        localStorage.setItem("Balance", totAccount);

        res.innerHTML = totAccount;
        console.log("Resultado es: ", totAccount); 
    }else {
        alert("Saldo fuera de Rango");
        console.log("Saldo fuera de Rango");
    }
    
}

/* ingresar a la pagina de despedida o salir */

function exitPage() {

    if (activeSection == ".content_5") {
        extract.style.display = "none";
        exit.style.display = "block";
        activeSection = ".content_6";
    }

}

/* boton para volver a la pagina de inicio, bienvenida */

function startPage() {

    if (activeSection == ".content_6") {
        exit.style.display = "none";
        start.style.display = "block";
        activeSection = ".content_1";
        account.value = "";
        password.value = "";
    }
}