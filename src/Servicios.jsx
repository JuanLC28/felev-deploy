import { ServicioItem } from "./ServicioItem";

export function Servicios() {
  return (<section className="servicios" id="servicios">
    <h2>Nuestros servicios</h2>
    <p>Ofrecemos diseño web, desarrollo de aplicaciones y consultoría informática para llevar tu proyecto al siguiente nivel. ¡Impulsa tu crecimiento digital con nosotros!</p>
    <ul className="servicios__lista">

      <ServicioItem titulo={"Diseño de Páginas Web"} link={"#"}>
        Creamos páginas web atractivas y funcionales que se adaptan a tus necesidades y a las de tus usuarios.
      </ServicioItem>

      <ServicioItem titulo={"Diseño de Páginas Web"} link={"#"}>
        Creamos páginas web atractivas y funcionales que se adaptan a tus necesidades y a las de tus usuarios.
      </ServicioItem>

      <ServicioItem titulo={"Tiendas Virtuales"} link={"#"}>
        Desarrollamos tiendas en línea seguras y fáciles de usar para impulsar las ventas de tu negocio.
      </ServicioItem>

      <ServicioItem titulo={"Desarrollo de Chatbots"} link={"#"}>
        Implementamos chatbots inteligentes que mejoran la atención al cliente y automatizan tareas repetitivas.
      </ServicioItem>

      <ServicioItem titulo={"Aplicaciones Web"} link={"#"}>
        Construimos aplicaciones web que optimizan tus procesos y mejoran la experiencia del usuario.
      </ServicioItem>

      <ServicioItem titulo={"Aplicaciones Móviles"} link={"#"}>
        Creamos aplicaciones móviles que conectan a tu negocio con tus clientes en cualquier lugar del mundo.
      </ServicioItem>

      <ServicioItem titulo={"Consultoría"} link={"#"}>
        Brindamos consultorías informáticas para asegurar la eficiencia y seguridad de tus sistemas.
      </ServicioItem>

      <ServicioItem titulo={"Desarrollo de Software"} link={"#"}>
        Ofrecemos soluciones de software a medida que resuelven problemas específicos y potencian tu negocio.
      </ServicioItem>
    </ul>
  </section>);
}