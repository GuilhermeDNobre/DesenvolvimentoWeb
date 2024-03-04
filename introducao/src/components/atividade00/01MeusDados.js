// Crie um arquivo dentro da pasta src/components/atividade00 chamado
// 01MeusDados.jsx
// ● Implemente um componente que mostre na tela seu nome completo, curso e
// universidade. Separe essas informações usando a tag <h1>.
// ● Implemente, ainda no mesmo arquivo, quatro versões do mesmo
// componente: usando function, arrow function com return, arrow function sem
// return e classes.
// ● Tente usar algum estilo.
import {Component} from "react"


const MeusDados = () => {
    return (
        <div>
            <h1>Nome:Guilherme Damasceno Nobre</h1>
            <h1>Curso: Engenharia de Software</h1>
            <h1>Universidade: UFC</h1>
            <h1>Método arrou function com return</h1>
        </div>
    )
}

// const MeusDados = () =>
//         <div>
//             <h1>Nome:Guilherme Damasceno Nobre</h1>
//             <h1>Curso: Engenharia de Software</h1>
//             <h1>Universidade: UFC</h1>
//             <h1>Método arrou function sem return</h1>
//         </div>

// function MeusDados() {
//     return (
//         <div>
//             <h1>Nome:Guilherme Damasceno Nobre</h1>
//             <h1>Curso: Engenharia de Software</h1>
//             <h1>Universidade: UFC</h1>
//             <h1>Método function</h1>
//         </div>
//     ) 
// }

// class MeusDados extends Component {
//         render() {
//             return (
//                 <div>
//                     <h1>Nome:Guilherme Damasceno Nobre</h1>
//                     <h1>Curso: Engenharia de Software</h1>
//                     <h1>Universidade: UFC</h1>
//                     <h1>Método classe</h1>
//                 </div>
//             )
//         }
// }

export default MeusDados
