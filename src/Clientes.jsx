import { ClienteItem } from "./ClienteItem";

export function Clientes() {
  return (<section className="clientes">
    <ul className="clientes__lista">
      <ClienteItem link={"/pmi-logo.png"} descripcion={"PMI logotipo"} />
      <ClienteItem link={"/lionhungry-logo.png"} descripcion={"LionHungry logotipo"} />
      <ClienteItem link={"/sk7-logo.png"} descripcion={"Sk7 logotipo"} />

      <ClienteItem link={"/pmi-logo.png"} descripcion={"PMI logotipo"} />
      <ClienteItem link={"/lionhungry-logo.png"} descripcion={"LionHungry logotipo"} />
      <ClienteItem link={"/sk7-logo.png"} descripcion={"Sk7 logotipo"} />

      <ClienteItem link={"/pmi-logo.png"} descripcion={"PMI logotipo"} />
      <ClienteItem link={"/lionhungry-logo.png"} descripcion={"LionHungry logotipo"} />
      <ClienteItem link={"/sk7-logo.png"} descripcion={"Sk7 logotipo"} />

      <ClienteItem link={"/pmi-logo.png"} descripcion={"PMI logotipo"} />
      <ClienteItem link={"/lionhungry-logo.png"} descripcion={"LionHungry logotipo"} />
      <ClienteItem link={"/sk7-logo.png"} descripcion={"Sk7 logotipo"} />
    </ul>
  </section>);
}