import { useState } from "react"

const Pokemon = () => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [contador, setContador] = useState(1)

    const incrementarContador = () => {
        setContador(contador => contador + 1)
    }

    const decrementarContador = () => {
        if(contador <= 1){
            console.log("Nao da pra diminuir mais nao colega")
        } else{
            setContador(contador => contador - 1)
        }
    }


    return(
        <div>
            <h2>Contador: {contador}</h2>
            <img 
                src= {url+ contador + ".png"}
                alt="pokemon"
                width={200}
            />
            <button
                onClick={() => incrementarContador()}
            >
                Incrementar Contador!
            </button>
            <button
                onClick={() => decrementarContador()}
            >
                Decrementar Contador!
            </button>
        </div>
    )
}

export default Pokemon