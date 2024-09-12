import './Navbar.css';

function Navbar (){
    return (
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
        

    )
}

export default Navbar