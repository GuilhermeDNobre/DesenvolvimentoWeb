const Temperatura = () => {
    
    function celsiusParaFahrenheit(c) {
        return c * 1.8 + 32
    }

    function fahrenheitParaCelsius(f){
        return (5*f - 160)/9
    }
    
    function kelvin(k){
        return {celsius: k + 273, fahrenheit:1.8 * (k - 273) + 32}
    }

    let {celsius, fahrenheit} = kelvin(500)

    return(
        <div>
            {celsiusParaFahrenheit(100)}
            <hr></hr>
            {fahrenheitParaCelsius(212)}
            <hr></hr>
            Celsius: {celsius}
            Fahrenheit: {fahrenheit}
        </div>
    )
}

export default Temperatura