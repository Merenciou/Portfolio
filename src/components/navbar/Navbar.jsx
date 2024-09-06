import './Navbar.css';

function Navbar (){
    return (
        <nav className='navbarDesktop'>
            <div className='containerOne'>
                <ul>
                    <h1>
                        <span class="logoName">Vitor </span> 
                        <span class="logoLastName">Merencio</span>
                    </h1>
                </ul>
                
                
            </div>
            
            <div className='containerTwo'>
            <ul className='navDesktop'>
                <li className='navItem'>
                    <a href="" className='navText' >Página Inicial</a>
                </li>
            </ul>
            <ul className='navDesktop'>
                <li className='navItem'>
                    <a href="" className='navText' >Sobre</a>
                </li>
            </ul>
            <ul className='navDesktop'>
                <li className='navItem'>
                    <a href="" className='navText' >Projetos</a>
                </li>
            </ul>
            <ul className='navDesktop'>
                <li className='navItem'>
                    <a href="" className='navText' >Conhecimentos</a>
                </li>
            </ul>
            <ul className='navDesktop'>
                <li className='navItem'>
                    <a href="" className='navText' >Contato</a>
                </li>
            </ul>

            </div>
            
        </nav>
        

    )
}

export default Navbar