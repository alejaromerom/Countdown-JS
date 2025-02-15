//Inicia el contador en 0
let time = 0;
//FUncion del counter
function myTimer() {
  // retorna el metodo que devuelve en millisegiundos
  return setInterval(() => {
    // muestra la fecha y hora actual local
    const now = new Date();
    //Muestra el año actual
    const nextYear = now.getFullYear() + 1;
    //Se crea la constante la cual representa el formato hasta la fecha de finalizacion de año
    const endOfYear = new Date(nextYear, 0, 1, 0, 0, 0);
    //represent la diferencia de tiempo entre el ahora y el fin de año haciendo una operación de resta para saber cuandos días faltan
    const timeDifference = endOfYear - now;
    //math.floor redondea hacia abajo, solo considera los valores enteros
    const days = Math.round(timeDifference / (1000 * 60 * 60 * 24));

    const hours = Math.round(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    //obtener los valores correctos
    const minutes = Math.round(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.round((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = `${days}`;
    document.getElementById("hours").innerText = `${hours}`;
    document.getElementById("minutes").innerText = `${minutes}`;
    document.getElementById("seconds").innerText = `${seconds}`;
    document.getElementById("demo").innerHTML = now.toLocaleTimeString();
  }, 1000);
}
myTimer();
