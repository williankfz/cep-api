const inputCep = document.querySelector('#cep');
const enviar = document.querySelector('.button');
const logradouro = document.querySelector('#logradouro');
const complemento = document.querySelector('#complemento');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf = document.querySelector('#uf');
const ibge = document.querySelector('#ibge');
//https://viacep.com.br/ws/${cep}/json/

async function pegarCep(cep){
  try{
    const viaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const jsonDados = await viaCep.json();
    logradouro.value = jsonDados.logradouro;
    complemento.value = jsonDados.complemento;
    bairro.value = jsonDados.bairro;
    localidade.value = jsonDados.localidade;
    uf.value = jsonDados.uf;
    ibge.value = jsonDados.ibge;
  }catch(erro){
    console.log(erro);
  }
}

function handleClick(e){
  e.preventDefault();
  const cep = inputCep.value;
  pegarCep(cep);
}

enviar.addEventListener('click', handleClick);
