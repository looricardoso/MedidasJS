const botaoCalcular = document.getElementById('calcular');
const valorDigitado = document.getElementById('medida');
const centimetros = document.getElementById('resultadoCentimetros');
const metros = document.getElementById('resultadoMetros');
const kilometros = document.getElementById('resultadoKilometros');

const calcularMedidas = (evento) => {
    evento.preventDefault();
    let valorOriginal = valorDigitado.value;
    let valorCentimetros = valorOriginal*100;
    let valorKilometros = valorOriginal/1000;

    if (valorOriginal <= 0) {
        centimetros.innerText = 'Impossível calcular.';
        metros.innerText = 'Insira números maiores que 0 (zero)';
        kilometros.innerText = '';
    } else if (Number.isNaN(valorCentimetros) || Number.isNaN(valorKilometros)) {
        centimetros.innerText = 'Insira um ponto para separar valores.';
        metros.innerText = '';
        kilometros.innerText = '';
    } else {
        centimetros.innerText = `${valorCentimetros} cm`;
        metros.innerText = `${valorOriginal} m`;
        kilometros.innerText = `${valorKilometros} Km`;
    };
};

botaoCalcular.addEventListener('click', calcularMedidas);