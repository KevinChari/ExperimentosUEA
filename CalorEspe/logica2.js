
const constante1 = 1.675;
const constante2 = 0.025;


function calcularConstantesModelo2(value) {
    const masaAgua = constante2 * value;
    return constante1 + masaAgua;
};


function onclickCalcularCalorEspecificoModeloDos() {
    const model2 = document.getElementById("form__agua-model-2");
    const modelValue = model2.value;

    const calularCalorEspecificoModelo2 = calcularConstantesModelo2(modelValue);

    const resultadoModelo2 = document.getElementById("ResultadoModelo2");
    resultadoModelo2.innerText = `El calor específico es: ${calularCalorEspecificoModelo2} J`;
}