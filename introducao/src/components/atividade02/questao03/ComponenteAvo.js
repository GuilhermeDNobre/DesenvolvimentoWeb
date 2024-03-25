import NumeroPokemon from "./ContextoFamilia";
import ComponenteFilho from "./ComponenteFilho";
import { useContext } from "react";




const ComponenteAvo = () => {
    let src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const numero = useContext(NumeroPokemon)

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

                <ComponenteFilho />
            </div>
        </NumeroPokemon.Provider>
    )
    
}

export default ComponenteAvo