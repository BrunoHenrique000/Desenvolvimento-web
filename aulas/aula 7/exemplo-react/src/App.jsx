import Cabecalho from "./components/cabecalho";

export default function App() {
  const nome = "Bruno";

  return (
    <main>
      <Cabecalho texto="Cabeçalho maroto" />
      <Cabecalho texto="Cabeçalho 2" />
    </main>
  );
}

// import Cabecalho from "./components/cabecalho"

// export default function App() {
//   const nome = "Bruno"
//   let contador = 0;

//   function incrementar() {
//     contador = contador++;
//     console.log(contador)
//   }

//   return (
//     <main>
//       <Cabecalho texto="Cabeçalho maroto" />
//       <Cabecalho texto="Cabeçalho 2" />
//       <p>Valor atual {contador}</p>
//       <button onClick={incrementar}>Incrementar</button>
//     </main>
//   )
// }
