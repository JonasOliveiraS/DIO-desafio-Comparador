const conteudoFinal = document.querySelector('#conteudoFinal');
firtsNumber = document.querySelector("#firtsNumber");
secondNumber = document.querySelector("#secondNumber");


document.querySelector("#sendNumber").addEventListener("click", function (e) {

    e.preventDefault();

    let somaDosNumeros = Number(firtsNumber.value) + Number(secondNumber.value);

    if(firtsNumber.value < 0 || secondNumber.value <0 ){
        conteudoFinal.innerHTML = `Atribuição de valores inválidas!`
    } else {
        if (firtsNumber.value == secondNumber.value) {
            if (somaDosNumeros >= 20) {
                conteudoFinal.innerHTML = `Os números ${firtsNumber.value} e ${secondNumber.value} são iguais. Sua soma é ${somaDosNumeros}, que é maior que 10 e maior ou igual a 20.`
            } else if (somaDosNumeros < 10) {
                conteudoFinal.innerHTML = `Os números ${firtsNumber.value} e ${secondNumber.value} são iguais. Sua soma é ${somaDosNumeros}, que é menor que 10 e menor que 20.`
            } else {
                conteudoFinal.innerHTML = `Os números ${firtsNumber.value} e ${secondNumber.value} são iguais. Sua soma é ${somaDosNumeros}, que é maior ou igual a 10 e menor que 20.`
            }
    
        } else {
            if (somaDosNumeros >= 20) {
                conteudoFinal.innerHTML = `Os números ${firtsNumber.value} e ${secondNumber.value} não são iguais. Sua soma é ${somaDosNumeros}, que é maior que 10 e maior ou igual a 20.`
            } else if (somaDosNumeros < 10) {
                conteudoFinal.innerHTML = `Os números ${firtsNumber.value} e ${secondNumber.value} não são iguais. Sua soma é ${somaDosNumeros}, que é menor que 10 e menor que 20.`
            } else {
                conteudoFinal.innerHTML = `Os números ${firtsNumber.value} e ${secondNumber.value} não são iguais. Sua soma é ${somaDosNumeros}, que é maior ou igual a 10 e menor que 20.`
            }
    
        }
    }

})