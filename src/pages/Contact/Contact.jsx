import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

function Contact(){

    return(
        <div>
            <section id='contactPage'>
                <div className='mainContainerContact'>
                    <div className='containerPrimaryContact'>
                        <h1 className='contactTitle'>Contato</h1>
                    </div>
                    <div className='containerSecondaryContact'>
                        <img src="./whatsapp.svg" alt="whatsapp"  className='whatsappImg'/>
                        <div className='containerIcons'>
                            <div className='containerIcon'>
                                <MdEmail className='contactIcon'/>
                                <a href="mailto:vitormerencio.1987@gmail.com" className='linkIcon'> 
                                    <h3 className='iconSubtitle'>Email</h3> 
                                </a>

                            </div>
                            <div className='containerIcon'>
                            <FaLinkedin className='contactIcon'/>
                                <a href="https://www.linkedin.com/in/vitor-mer%C3%AAncio-1bb176220/" className='linkIcon'> 
                                    <h3 className='iconSubtitle'>LinkedIn</h3> 
                                </a>

                            </div>
                            <div className='containerIcon'>
                            <FaSquarePhone  className='contactIcon'/>
                                    <h3 className='iconSubtitle'>Telefone</h3> 
                            </div>

                        </div>
                        
                    
                        
                    </div>
                    
                    

                </div>
                

            </section>
        </div>
    );
}

export default Contact