import {Link} from 'react-router-dom'
import "./header.css";

const Header = () => {
  
  return (
    <header>
      <Link to="/" > <h2>PokeGyms
      </h2>
      </Link>
    </header>
  );
};

export default Header;
