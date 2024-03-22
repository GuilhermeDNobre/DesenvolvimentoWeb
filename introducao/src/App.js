//import HelloWorld from "./components/01HelloWorld/HelloWorld";
//import Pai from "./components/atividade01/questao01/01Pai";
//import * as PC from "./components/atividade01/questao02/02MeuPC";
import * as Batalha from "./components/atividade01/questao03/03.Batalha";

function App() {
  return (
    <Batalha.World>
      <Batalha.Arena arena="Pedra da Galinha 
      Choca" />
      <hr></hr>
      <Batalha.Arena arena="Açude Cedro" />
    </Batalha.World>
      
    
  );
}

export default App;
