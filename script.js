const h1 = document.querySelector("#h1");
const  input1 = document.querySelector("#calculo1");
const  input2 = document.querySelector("#calculo2");
const button = document.querySelector("#btnCalcular");
const elResultado = document.querySelector("#resultado")





function suma() {
    const sumaDeInputs = Number(input1.value) + Number(input2.value);
    elResultado.innerText ="El resultado de tu sumas es " + sumaDeInputs;
}