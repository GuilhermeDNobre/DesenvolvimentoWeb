import { useEffect, useState } from "react"
import axios from "axios"

const CovidAxios = () => {
    
    const [casos, setCasos] = useState(0)
    const [morte, setMorte] = useState(0)

    useEffect(
        () => {
            const pegarDados = async() => {
                const res = await fetch("https://covid19-brazil-api.now.sh/api/report/v1")
                const json = await res.json()
                setCasos(json.data[8].cases)
                setMorte(json.data[8].deaths)
            }
            pegarDados().catch(console.error)
        }
        ,
        []
    )

    return (
        <>
            <h1>CEARÁ</h1>
            <h3>Casos: {casos}</h3>
            <h3>Mortes: {morte}</h3>
        </>
    )
}

export default CovidAxios