import "../style.css"
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/books">Libros</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;