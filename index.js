// Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}


function calcularCuadrado() {
    const input = document.getElementById("ladocuadrado");
    const lado = input.value;
    const perimetro = perimetroCuadrado(lado);
    const area = areaCuadrado(lado);
    const spanPerimetro = document.getElementById("perimetroCuadrado")
    const spanArea = document.getElementById("areaCuadrado")
    spanPerimetro.textContent = perimetro;
    spanArea.textContent = area;
}
    
























function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio) {
    return (radio * radio) * PI;
}































