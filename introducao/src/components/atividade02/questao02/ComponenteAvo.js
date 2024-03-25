import NumeroPokemon from "./ContextoFamilia";
import ComponenteFilho from "./ComponenteFilho";
import { useContext } from "react";
import { useState } from "react";


const ComponenteAvo = () => {
    let src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    //const numero = useContext(NumeroPokemon)

    const [numero, setNumero] = useState(1)

    function aumentarNumero(numero){
        setNumero(numero + 1)
    }
    return(
        <NumeroPokemon.Provider value={numero}>
            <div>
                <hr />
                    <h3>Pokemon Avo</h3>
                    <img 
                        src= {src + numero + ".png"}
                        width={300}
                        alt="Pokemon gerado pelo avo"
                    />

                    <button onClick={() => aumentarNumero(numero)}>
                        Próximo Pokemon
                    </button>
                    <ComponenteFilho />
                    </div>
        </NumeroPokemon.Provider>
            
        )
}
export default ComponenteAvo