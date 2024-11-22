import { useState } from "react"
import"./Style.scss"

export default function App() {
//VARIAVEL DE ESTADO
  //primeiroValor é a variavel de estado
 // setPrimeiroValor é a função atualizadora
 const [primeiroValor, setPrimeiroValor] =useState();
 const [segundoValor, setSegundoValor] = useState();
 const [resultado, setResultado] = useState()

 // arrow function () => {}
   // função especial
 const capturandoPrimeiroValor = (e) => {
   setPrimeiroValor(Number(e.target.value))
   console.log(e.target.value)
 }

 const capturandoSegundoValor = (e) => {
   setSegundoValor(Number(e.target.value))
 }
   // função  somar
   const soma = () => {
    setResultado(primeiroValor + segundoValor)
   }
   const subtração = () => {
    setResultado(primeiroValor - segundoValor)
   }
   const divisão = () => {
    setResultado(primeiroValor / segundoValor)
   }
   const multiplicação = () => {
    setResultado(primeiroValor * segundoValor)
   }

 return (
    <main>
<h1>Calculadora</h1>
      <input onChange={capturandoPrimeiroValor} type="number" placeholder="Insira um número"/>
      <input onChange={capturandoSegundoValor} type="number" placeholder="Insira um número"/>
      <div>
        <button onClick={soma}>+</button>
        <button onClick={subtração}>-</button>
        <button onClick={divisão}>/</button>
        <button onClick={ multiplicação}>x</button>
      </div>
    <h3>{resultado}</h3>
    </main>
  )
}