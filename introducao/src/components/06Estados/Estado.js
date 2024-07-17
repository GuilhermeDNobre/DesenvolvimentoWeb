import { useState } from "react"


const Estado = () => {
    
    let [contador, setContador] = useState(1)

    const incrementarContador = () => {
        setContador(contador => contador + 1)
    }
    
    
    return(
        <div>
            <h2>Contador: {contador}</h2>
            <button
                onClick={() => incrementarContador()}
            >
                Incrementar Contador!
            </button>
        </div>
    )
}

export default Estado