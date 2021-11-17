
const constante1Model3 = 0.837;
const constante2Model3 = 1.256;


function calcularConstantesModelo3(value) {
    const masaAgua = constante2Model3 * value;
    return constante1Model3 + masaAgua;
};


function onclickCalcularCalorEspecificoModeloTres() {
    const model3 = document.getElementById("form__agua-model-3");
    const modelValue = model3.value;

    const calularCalorEspecificoModelo3 = calcularConstantesModelo3(modelValue);

    const resultadoModelo3 = document.getElementById("ResultadoModelo3");
    resultadoModelo3.innerText = `El calor específico es: ${calularCalorEspecificoModelo3} J`;
}