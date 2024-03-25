import { useContext } from "react";
import ComponenteNeto from "./ComponenteNeto";
import NumeroPokemon from "./ContextoFamilia";

const ComponenteFilho = () => { 
    let src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const numero = useContext(NumeroPokemon) + 1
    console.log(numero)

    return(
        <NumeroPokemon.Provider value={numero}>
            <div>  
                <hr />
                <h3>Pokemon Filho</h3>
                <img 
                    src={src + numero + ".png"}
                    width={300}
                    alt="Pokemon gerado pelo filho"
                />
                
                <ComponenteNeto />
        </div>
        </NumeroPokemon.Provider>
        
    )
}

export default ComponenteFilho