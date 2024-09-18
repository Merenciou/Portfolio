import { useState } from 'react';
import './Navbar.css';

function Navbar (){

    const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
    const [menu_class, setMenuClass] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass('burger-bar clicked');
            setMenuClass('menu visible');
        } else {
            setBurgerClass('burger-bar unclicked');
            setMenuClass('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    }

    

    return (
        <div>
            <nav className='navbarDesktop'>
                <div className='containerOne'>
                    <ul>
                        <h1>
                            <span className="logoName">Vitor </span> 
                            <span className="logoLastName">Merencio</span>
                        </h1>
                    </ul>          
                </div>        
                <div className='containerTwo'>
                    <ul className='navDesktop'>
                        <li className='navItem'>
                            <a href="#homePage" className='navText' >Página Inicial</a>
                        </li>
                    </ul>
                    <ul className='navDesktop'>
                        <li className='navItem'>
                            <a href="#aboutPage" className='navText' >Sobre</a>
                        </li>
                    </ul>
                    <ul className='navDesktop'>
                        <li className='navItem'>
                            <a href="#projectsPage" className='navText' >Projetos</a>
                        </li>
                    </ul>
                    <ul className='navDesktop'>
                        <li className='navItem'>
                            <a href="#knowledgesPage" className='navText' >Conhecimentos</a>
                        </li>
                    </ul>
                    <ul className='navDesktop'>
                        <li className='navItem'>
                            <a href="#contactPage" className='navText' >Contato</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='coverMenu'>
                <nav className='navMobile' >
                    <div className='burger-menu' onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </nav>
                <div className={menu_class}>

                    <div className='menuItems'>
                        <ul className='navDesktop'>
                            <li className='navItem'>
                                <a href="#homePage" className='navText' onClick={updateMenu}>Página Inicial</a>
                            </li>
                        </ul>
                        <ul className='navDesktop'>
                            <li className='navItem'>
                                <a href="#aboutPage" className='navText' onClick={updateMenu}>Sobre</a>
                            </li>
                        </ul>
                        <ul className='navDesktop'>
                            <li className='navItem'>
                                <a href="#projectsPage" className='navText' onClick={updateMenu}>Projetos</a>
                            </li>
                        </ul>
                        <ul className='navDesktop'>
                            <li className='navItem'>
                                <a href="#knowledgesPage" className='navText' onClick={updateMenu}>Conhecimentos</a>
                            </li>
                        </ul>
                        <ul className='navDesktop'>
                            <li className='navItem'>
                                <a href="#contactPage" className='navText' onClick={updateMenu}>Contato</a>
                            </li>
                        </ul>
                    </div>









                    

                </div>
            </div>

        </div>
        
    )
}

export default Navbar