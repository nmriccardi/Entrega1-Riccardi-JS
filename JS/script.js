//funciones
function calcularGradoElectrificacion(m2) {
    let grado;

    if (m2 < 60) {
        grado = "Mínimo";
    } else if (m2 >= 60 && m2 <= 130) {
        grado = "Medio";
    } else if (m2 >= 130 && m2 <= 200) {
        grado = "Elevado";    
    } else {
        grado = "Superior";
    }
    return grado;
}

function obtenerMinimosCircuitos(grado) {
    let minCircuitos = [];

    switch (grado) {
        case "Mínimo":
            minCircuitos.push({ iluminacion: 1, tomacorrientes: 1 });
            break;
        case "Medio":
            // Opción 1: 1 de iluminación y 2 de tomacorrientes
            minCircuitos.push({ iluminacion: 1, tomacorrientes: 2 });
            // Opción 2: 2 de iluminación y 1 de tomacorrientes
            minCircuitos.push({ iluminacion: 2, tomacorrientes: 1 });
            break;
        case "Elevado":
            // Opción 1: 2 de iluminación y 3 de tomacorrientes
            minCircuitos.push({ iluminacion: 2, tomacorrientes: 3 });
            // Opción 2: 3 de iluminación y 1 de tomacorrientes
            minCircuitos.push({ iluminacion: 3, tomacorrientes: 2 });
            break;
        case "Superior":
            // Opción 1: 2 de iluminación, 3 de tomacorrientes y 1 libre
            minCircuitos.push({ iluminacion: 2, tomacorrientes: 3, libre: 1 });
            // Opción 2: 3 de iluminación, 2 de tomacorrientes y 1 libre
            minCircuitos.push({ iluminacion: 3, tomacorrientes: 2, libre: 1 });
            break;
        default:
            console.log("Error: grado de electrificación no reconocido.");
    }

    return minCircuitos;
}

// Arrays para almacenar los valores
let m2Array = [];
let gradosArray = [];

let m2;
do {
    // Solicitar los m2 al usuario hasta que ingrese un valor válido
    m2 = parseFloat(prompt("Ingrese los m2 de la casa (ingrese un número válido):"));
} while (isNaN(m2));  // Repite el ciclo si el valor ingresado no es un número

// Calcular y mostrar el grado de electrificación
let grado = calcularGradoElectrificacion(m2);
alert(`El grado de electrificación para una casa de ${m2}m² es: ${grado}`);

// Almacenar el valor en el array
m2Array.push(m2);
gradosArray.push(grado);

// Mostrar los valores almacenados
console.log("Valores de metros cuadrados ingresados:", m2Array);
console.log("Grados de electrificación calculados:", gradosArray);
