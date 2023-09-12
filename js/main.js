const calcularPerimetro = (a, b, c) => a + b + c;
const calcularArea = (h, b) => (h * b) / 2;

let continuar = true;
alert("Calculador de perimetros y areas de triangulos");
while (continuar) {
    let a = parseFloat(prompt("Ingrese lado a"));
    let b = parseFloat(prompt("Ingrese lado b"));
    let c = parseFloat(prompt("Ingrese lado c"));

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        const perimetro = calcularPerimetro(a, b, c);
        console.log("El perímetro del triángulo es " + perimetro);
    } else {
        console.log("Por favor, ingrese valores numéricos válidos.");
        continue;
    }

    let seguirCalculandoPerimetros = prompt("¿Desea calcular el perímetro de otro triángulo? (Sí/No)").toLowerCase();
    if (seguirCalculandoPerimetros !== "si") {
        let calcularAreas = prompt("¿Desea calcular el área? (Sí/No)").toLowerCase();
        if (calcularAreas === "si") {
            let h = parseFloat(prompt("Ingrese altura"));
            let b = parseFloat(prompt("Ingrese base"));
            if (!isNaN(h) && !isNaN(b)) {
                const area = calcularArea(h, b);
                console.log("El área del triángulo es " + area);
            } else {
                console.log("Por favor, ingrese valores numéricos válidos.");
                continue;
            }
        }

        let seguirCalculando = prompt("¿Desea calcular el perímetro o el área de otro cuadrado? (Sí/No)").toLowerCase();
        
        if (seguirCalculando !== "si") {
            continuar = false;
        }
    }
}

console.log("Gracias por usar el calculador de perímetros y áreas de cuadrados.");