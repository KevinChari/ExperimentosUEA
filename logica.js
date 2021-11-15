
const fraccMasicaAgua = 4.180;
const fraccMasicaProteina = 1.711;
const fraccMasicaGrasa = 1.928;
const fraccMasicaCarbohidratos = 1.547;
const fraccMasicaCenizas = 0.908;




function calcularConstantes(value1, value2, value3, value4, value5) {
    const masaAgua = fraccMasicaAgua * value1;
    const masaProteina = fraccMasicaProteina * value2;
    const masaGrasa = fraccMasicaGrasa * value3;
    const masaCarbohidratos = fraccMasicaCarbohidratos * value4;
    const masaCenizas = fraccMasicaCenizas * value5;


    return masaAgua + masaProteina + masaGrasa + masaCarbohidratos + masaCenizas;
};



function onclickCalcularCalorEspecifico() {
    const MasasAgua = document.getElementById("masasAgua");
    const aguaValue = MasasAgua.value;

    const MasasProteina = document.getElementById("masasProteina");
    const proteinaValue = MasasProteina.value;

    const MasasGrasa = document.getElementById("masasGrasa");
    const grasaValue = MasasGrasa.value;

    const MasasCarbo = document.getElementById("masasCarbo");
    const carboValue = MasasCarbo.value;

    const MasasCeniz = document.getElementById("masasCeniz");
    const cenizValue = MasasCeniz.value;


    const constantes = calcularConstantes(aguaValue, proteinaValue, grasaValue, carboValue, cenizValue);

    const resultCalor = document.getElementById("ResultCalor");
    resultCalor.innerText = `El calor específico es ${constantes} J`;
}
