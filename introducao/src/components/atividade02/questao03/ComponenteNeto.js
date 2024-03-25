import { useContext } from "react";
import NumeroPokemon from "./ContextoFamilia";

const ComponenteNeto = () => { 
    let src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const numero = useContext(NumeroPokemon) + 1

    return(
        <NumeroPokemon.Provider>
            <div>  
                <hr />
                <h3>Pokemon Filho</h3>
                <img 
                    src={src + numero + ".png"}
                    width={300}
                    alt="Pokemon gerado pelo filho"
                />
        </div>
        </NumeroPokemon.Provider>
        
    )
}

export default ComponenteNeto