import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header className='header'>
            <a href="#">LOGO</a>
            <nav className='nav'>
                <Link className='nav-link' to="/" >Game</Link>
                <Link className='nav-link' to="/todos" >Todos</Link>
            </nav>
        </header>
    )

}

export default Header