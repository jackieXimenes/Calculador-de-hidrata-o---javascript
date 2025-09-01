let nome = document.getElementById("nome");
let peso = document.getElementById("peso");
let idade1 = document.getElementById("idade");
let btn = document.getElementById("btn");
let resposta = document.getElementById("resposta");


btn.addEventListener("click", Agua);

function Agua (){
  let pesoParaUsar = Number(peso.value)/1000;
  let QuantidadeDeAgua = 0;
  let idade = idade1.value;


    if (idade<17){
     QuantidadeDeAgua = 40
    }
    else if(idade>=18 && idade<55){
      QuantidadeDeAgua = 35
    }
    else{
      QuantidadeDeAgua = 30
    }

    let calculo = QuantidadeDeAgua*pesoParaUsar;
    resposta.innerHTML= `</br> Olá ${nome.value}, você deve beber ${calculo} litros de água diários para ficar hidratado!`; 
}