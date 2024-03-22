const Filho = ({altura, peso}) =>{
    function calculoIMC(imc){
        if (imc < 18){
            return <h3>Abaixo do peso</h3>
        }else if(imc > 25){
            return <h3>Acima do peso</h3>
        }else {
            return <h3>Peso ideal</h3>
        }
    }

    let imc = peso/(altura * altura);
    

    return(
        <div>
            <h2>A altura é: {altura}</h2>
            <h2>O peso é: {peso}</h2>
            <h2>O IMC calculado é: {imc.toFixed(2)}</h2>
            {calculoIMC(imc)}
        </div>
    )
}

export default Filho