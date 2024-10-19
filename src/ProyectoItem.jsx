export function ProyectoItem({ link, descripcion }) {
  return (<li className="proyectos__item">
    <img src={link} alt={descripcion} />
  </li>);
}