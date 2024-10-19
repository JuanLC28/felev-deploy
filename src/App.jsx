import { Clientes } from "./Clientes";
import { Hero } from "./Hero";
import { Cabecera } from "./Cabecera";
import { Servicios } from "./Servicios";
import { Proyectos } from "./Proyectos";
import { Nosotros } from "./Nosotros";

export function App() {
  return (
    <>
      <Cabecera />

      <Hero />

      <Clientes />

      <Servicios />

      <Proyectos />

      <Nosotros />
    </>
  )
}