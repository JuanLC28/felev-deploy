export function Boton({ link, texto, children }) {
  return (<a href={link}>
    <span className="icon">
      {children}
    </span>
    {texto}
  </a>);
}