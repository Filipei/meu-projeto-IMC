function imc(){

const altura = parseFloat(document.getElementById('altura').value)
const peso = parseFloat(document.getElementById('peso').value)
const resultado = document.getElementById('resultado')

const IMC = parseFloat(peso/(altura*altura))
resultado.innerHTML = IMC.toFixed(2)



if(IMC < 18.5){
    resultado.innerHTML = `Você esta abaixo do peso, seu IMC é: ${IMC.toFixed(2)}`

}
else if(IMC >= 18.5 && IMC <= 24.9){
    resultado.innerHTML = `Você esta no peso normal, seu IMC é: ${IMC.toFixed(2)}`
    
}
else if(IMC >= 25 && IMC <= 29.9){
    resultado.innerHTML = `Você esta com sobrepeso, seu IMC é: ${IMC.toFixed(2)}`
}
else if( IMC >= 30 && IMC <= 34.9){
    resultado.innerHTML = `Você esta com obesidade Grau I, seu IMC é: ${IMC.toFixed(2)}`
}
else if(IMC >= 35 && IMC <=39.9){
    resultado.innerHTML = `Você esta com obesidade Grau II, seu IMC é: ${IMC.toFixed(2)}`
}
else if (IMC >= 40){
    resultado.innerHTML = `Você esta com obesidade Grau III, seu IMC é: ${IMC.toFixed(2)}`
}


}

