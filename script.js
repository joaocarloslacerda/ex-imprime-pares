function imprimirPares(){

    const resultado = document.getElementById("resultado");

    let sequenciaPares

    for(let i = 1; i <=100; i++){
        if(i % 2 == 0 && (i > 0 && i < 3)){
            sequenciaPares = (`${i}, `);
        }
        else if(i % 2 == 0 && i < 100){
            sequenciaPares = sequenciaPares + (`${i}, `);
        }
        else if(i % 2 == 0 && i == 100){
            sequenciaPares = sequenciaPares + (`${i}`);
        }
    }
    resultado.value = sequenciaPares
}