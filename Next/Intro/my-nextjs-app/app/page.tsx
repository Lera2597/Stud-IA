// directiva para que se ejecute en el lado del cliente
//  y no en el lado del servidor como lo hace por defecto Next
"use client"; 
import Counter from "./components/Counter";
export default function Home() {
  return (
    <>
      <h1> Aplicacion de next</h1>
      <Counter/>
    </>
  );
}
