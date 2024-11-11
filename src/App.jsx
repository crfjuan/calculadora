import { useState } from "react"
import"./Style.scss"

export default function App() {
  //variável de estado
  const [primeiroValor, setSegundoValor] = useState()
  return (
    <main>
      <h1>Calculadora</h1>
      <input type="number"placeholder= "insira um número" />
      <input type="number"placeholder= "insira um número" />
      <div>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>x</button>
      </div>
    </main>
  )
}