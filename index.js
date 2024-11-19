import cesar from './cesar.js';


const msgOriginal = 'ola professor bruno vicente';
const chave = 3;
const msgCifrada = cesar.criptografia(msgOriginal, chave, cesar.cifrarLetras);
console.log('Mensagem Cifrada:', msgCifrada);


const msgDecifrada = cesar.criptografia(msgCifrada, chave, cesar.decifrarLetras);
console.log('Mensagem Decifrada:', msgDecifrada);
