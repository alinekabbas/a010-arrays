const numeroDaSorteOriginal = [2, 27, 53, 8, 64]
const numeroDaSorteCopia = numeroDaSorteOriginal

const frutaOriginal = ["pêssego", "melancia", "laranja"]
const frutaCopia = frutaOriginal

const nomesOriginal = ["Ursula", "Benedito", "Sebastião"]
const nomesCopia = nomesOriginal

//- Adicione um item `number` ao primeiro array. 
//Utilize `console.log()` para exibir o original e a cópia;
console.log(numeroDaSorteOriginal)
numeroDaSorteOriginal.push(5)
console.log(numeroDaSorteOriginal)
console.log(numeroDaSorteCopia)

//- Remova o último item do segundo array. 
//Utilize `console.log()` para exibir o original e a cópia;
console.log(frutaOriginal)
frutaOriginal.pop()
console.log(frutaOriginal)
console.log(frutaCopia)

//- Remova o segundo item do terceiro array. 
//Utilize `console.log()` para exibir o original e a cópia;
console.log(nomesOriginal)
nomesOriginal.splice(1,1)
console.log(nomesOriginal)
console.log(nomesCopia)