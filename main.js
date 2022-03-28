// 
const nome = 'mauro luis santos silva';
document.body.innerHTML += `Seu nome é:<strong> ${nome}</strong> </br>`;
document.body.innerHTML += `Seu nome tem o numero de letras:<strong> ${nome.length} </strong> </br>`;
document.body.innerHTML += `A segunda letra do seu nome é:<strong> ${nome[1]}</strong> </br>`;
document.body.innerHTML += `A primeira letra do seu nome: é:<strong> ${nome[0]}</strong> </br>`;
document.body.innerHTML += `A ultima letra do seu nome é:<strong> ${nome.lastIndexOf('a')} </strong></br>`;
document.body.innerHTML += `As 3 ultimas do seu nome são:<strong> ${nome.slice(-5)}</strong> </br>`;
document.body.innerHTML += `As palavras do seu nome são:<strong> ${nome.split(' ')} </strong></br>`;
document.body.innerHTML += `Seu nome em maiusculo é:<strong> ${nome.toUpperCase()}</strong> </br>`;
document.body.innerHTML += `Seu nome em minusculo é:<strong> ${nome.toLowerCase()}</strong> </br>`;