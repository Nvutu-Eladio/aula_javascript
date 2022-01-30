function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";


    // console.log(document.getElementById("agradecimento"));
    // agradecimento.innerHTML = "Obrigado por clicar";
}

function redirecionar(){
   window.open("https://github.com/Nvutu-Eladio/aula_javascript");
   // window.location.href = "https://web.dio.me/browse?filter=Banco%20de%20Dados";

}

function trocar(elemento){
 //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
//alert("trocar texto");
}
function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse";
       elemento.innerHTML = "Passe o mouse aqui";
   //alert("trocar texto");
   }

   function load(){
       alert("Página carregada")
   }

   function funcaoChange(elemento){
       console.log(elemento.value)
   }
// function soma(n1, n2){
//     return n1 + n2;
// }
// var validar = 0;

// function validaIdade(idade){
// if(idade >= 18){
//     validar = true
//  }else{
//     validar = false
// }
//     return validar;
// }

// var idade = prompt("Qual é a sua idade?");
// validaIdade(idade)
// console.log(validar);

// function soma(n1, n2){
    //     return n1 + n2;
    // }

    // function setReplace(frase, nome, novo_nome){
    //     return frase.replace(nome, novo_nome);
    // }

    // alert(soma(5,10));
    // alert(setReplace("Vai Brasil", "Angola", "Holanda"));

// var d = new Date();
// alert(d)

// var count;
// for(count=0; count <=5; count++){
//     alert(count);
// };

// var count = 0;
// while (count <= 5){
//     console.log(count)
//     count++;
// }

// var idade = prompt("Qual é a sua idade?")

// if (idade >=18){
//     alert("Maior de idade");
// }else{
//     alert("Menor de idade");
// }


/* var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas);
alert(frutas[1].nome); */

/* var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor); */


// var lista = ["maça", "pêra", "laranja"];
// //lista.push("uva"); 
// //lista.pop();
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" "));






// var nome = "Nvutu Eladio";
// var n1  = 20;
// var n2 = 10;
// var frase = "Brasil é o melhor time do mundo"
// //alert(idade + idade2)
// //alert(nome + " tem " + idade + " anos ")

// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.toLowerCase("Brasil", "Angola"))
// //alert(frase.replace("Brasil", "Angola"));