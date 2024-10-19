import { ProyectoItem } from "./ProyectoItem";

export function Proyectos() {
  return (<section className="proyectos" id="proyectos">
    <h2>Nuestros Proyectos</h2>

    <p>Descubre algunos de los proyectos en los que hemos trabajado y cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos a través de soluciones digitaleas innovadoras.</p>

    <ul className="proyectos__lista">
      <ProyectoItem link={"/proyecto1.webp"} descripcion={"Proyecto de ejemplo"} />
      <ProyectoItem link={"/proyecto1.webp"} descripcion={"Proyecto de ejemplo"} />
      <ProyectoItem link={"/proyecto1.webp"} descripcion={"Proyecto de ejemplo"} />
      <ProyectoItem link={"/proyecto1.webp"} descripcion={"Proyecto de ejemplo"} />
      <ProyectoItem link={"/proyecto1.webp"} descripcion={"Proyecto de ejemplo"} />
      <ProyectoItem link={"/proyecto1.webp"} descripcion={"Proyecto de ejemplo"} />
      <ProyectoItem link={"/proyecto1.webp"} descripcion={"Proyecto de ejemplo"} />
      <ProyectoItem link={"/proyecto1.webp"} descripcion={"Proyecto de ejemplo"} />
    </ul>
  </section>);
}