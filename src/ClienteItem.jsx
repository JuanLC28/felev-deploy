export function ClienteItem({link, descripcion}) {
  return (<li>
    <img src={link} alt={descripcion} />
  </li>);
}