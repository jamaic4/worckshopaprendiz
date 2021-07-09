const submeterFormulário = ( ) =>{
    const rangeInicial = document.getElementById("range inicial").value;
    const rangeFinal = document.getElementById("Range Final").value;
    const minhaAposta = document.getElementById("Sua aposta").value;

    realizarSorteio(+rangeInicial, +rangeFinal, +minhaAposta);
}

const realizarSorteio = (rangeInicial, rangeFinal, minhaAposta)=>{

    if (!rangeInicial){
        alert('informe o range inicial')
        return;
    }
    if (!rangeFinal){
        alert('informe o range final')
        return;
    }
    if (!minhaAposta){
        alert('informe a sua aposta')
        return;
    }

    


const numeroSorteado = novoSortei(rangeInicial,rangeFinal);

if(numeroSorteado=== minhaAposta){

    alert('parabéns você acertou :)');
    return
}

alert(`Errou! o numero sorteado foi ${numeroSorteado}`)
}
const novoSortei = (rangeInicial, rangeFinal) => {
    return(Math.floor (Math.random() * (rangeFinal - rangeInicial + 1))+rangeInicial);
}
