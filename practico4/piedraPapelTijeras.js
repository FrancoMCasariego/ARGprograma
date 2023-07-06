// Piedra-Papel-Tijeras

// Punto 2

function obtenerJugadaComputadora() {
const jugadaComputadora = ['piedra', 'papel', 'tijeras'];
const valorComputadora = Math.floor(Math.random() *3);
return jugadaComputadora[valorComputadora];
}

// Punto 3

function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    let jugadaUsuario = readlineSync.question('Ingresa tu jugada... piedra, papel o tijeras: ').toLowerCase();

    return jugadaUsuario;
}

// Punto 4

function determinarGanador(obtenerJugadaComputadora, obtenerJugadaUsuario) {
    if(jugadaComputadora === jugadaUsuario){
        return 'Empataron los dos.'
    }   else if((jugadaComputadora === 'piedra' && jugadaUsuario === 'tijeras')||
                (jugadaComputadora === 'tijeras' && jugadaUsuario === 'papel')||
                (jugadaComputadora === 'papel' && jugadaUsuario === 'piedra')){
                    return 'Gana la computadora. Perdiste'
        }   else{
                return 'Ganaste!.';
            }
}

// Paso 5
const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

// Paso 6
console.log(`La computadora eligió: ${jugadaComputadora}`);
console.log(`El usuario eligió: ${jugadaUsuario}`);
console.log(`El resultado fue: ${resultado}`);