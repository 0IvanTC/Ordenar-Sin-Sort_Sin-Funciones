let listaDesordenada=[3,1,6,7,2,9];
let listaOrdenada=[];

console.log("Lista Desordenada " + listaDesordenada);

for(let i=0;i<listaDesordenada.length;i++){
    for(let j=i+1;j<listaDesordenada.length;j++){
        let numMenor=0;
        if(listaDesordenada[i]>listaDesordenada[j]){
            numMenor=listaDesordenada[i];
            listaDesordenada[i]=listaDesordenada[j];
            listaDesordenada[j]=numMenor
        }
    }
    listaOrdenada.push(listaDesordenada[i]);
}

console.log("Lista Ordenada " + listaOrdenada);

/*while(contador<listaDesordenada.length){
    listaOrdenada.push(listaDesordenada[contador])
    contador++
}
listaOrdenada.sort(function(a,b){
    return a-b;
})
console.log("Lista Desordenada con sort " + listaDesordenada);
console.log("Lista ordenada con sort " + listaOrdenada);*/