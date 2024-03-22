
const Hero = ({name,arena}) => {
    return (
        <div>
            <h1>Sou o herói: {name}</h1>
            <h2>E estou lutando na arena: {arena}</h2>
            <img 
                src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbassauro"
                width={200}
            />
        </div>
    )
}

const Enemy = ({name}) => {
    return (
        <div>
            <h1>Sou o inimigo: {name}</h1>
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                alt="Charmander"
                width={200}
            />
        </div>
    )
}

const Arena = ({arena}) => {
    return (
        <div>
            <Hero name="Bulbassauro" arena= {arena}/>
            <Enemy name="Charmander" />
        </div>
    )
}

const World = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export {Hero, Enemy, Arena, World}