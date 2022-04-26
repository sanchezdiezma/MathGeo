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

// Triangulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
    
function calcularTriangulo() {
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const inputbase = document.getElementById("base");
    const inputaltura = document.getElementById("altura");
    const lado1 = parseInt(input1.value, 10);
    const lado2 = parseInt(input2.value, 10);
    const base = parseInt(inputbase.value, 10);
    const altura = parseInt(inputaltura.value, 10);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    const area = areaTriangulo(base, altura);
    const spanPerimetro = document.getElementById("perimetroTriangulo")
    const spanArea = document.getElementById("areaTriangulo")
    spanPerimetro.textContent = perimetro;
    spanArea.textContent = area;
}

// Circulo

function calcularCirculo() {
    const input = document.getElementById("radio");
    const radio = input.value;
    const perimetro = perimetroCirculo(radio);
    const area = areaCirculo(radio);
    const spanPerimetro = document.getElementById("perimetroCirculo")
    const spanArea = document.getElementById("areaCirculo")
    spanPerimetro.textContent = perimetro;
    spanArea.textContent = area;
}

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}



























































