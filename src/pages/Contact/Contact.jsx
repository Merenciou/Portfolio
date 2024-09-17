import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";

function Contact(){

    function showDescription1(){
        
        setTimeout(() => {
            document.querySelector(".iconDescription1").style.display = 'flex';         
        }, 100);        
    }

    function hideDescription1(){
        
        setTimeout(() => {
            document.querySelector(".iconDescription1").style.display = 'none';         
        }, 100);

    }

    function showDescription2(){
        
        setTimeout(() => {
            document.querySelector(".iconDescription2").style.display = 'flex';         
        }, 100);        
    }

    function hideDescription2(){
        
        setTimeout(() => {
            document.querySelector(".iconDescription2").style.display = 'none';         
        }, 100);

    }

    function showDescription3(){
        
        setTimeout(() => {
            document.querySelector(".iconDescription3").style.display = 'flex';         
        }, 100);        
    }

    function hideDescription3(){
        
        setTimeout(() => {
            document.querySelector(".iconDescription3").style.display = 'none';         
        }, 100);

    }

    function copyContent1(event) {
        const target = event.target;
        const iconNameElement = target.parentNode.querySelector('.iconName1');
        const iconNameText = iconNameElement.textContent;
      
        navigator.clipboard.writeText(iconNameText).then(() => {
          showAlert('Copiado!', 'success');
        }).catch((error) => {
          showAlert('Erro ao tentar copiar:', error);
        });
      }

      function copyContent2(event) {
        const target = event.target;
        const iconNameElement = target.parentNode.querySelector('.iconName2');
        const iconNameText = iconNameElement.textContent;
      
        navigator.clipboard.writeText(iconNameText).then(() => {
          showAlert('Copiado!', 'success');
        }).catch((error) => {
          showAlert('Erro ao tentar copiar:', error);
        });
      }

      function copyContent3(event) {
        const target = event.target;
        const iconNameElement = target.parentNode.querySelector('.iconName3');
        const iconNameText = iconNameElement.textContent;
      
        navigator.clipboard.writeText(iconNameText).then(() => {
          showAlert('Copiado!', 'success');
        }).catch((error) => {
          showAlert('Erro ao tentar copiar:', error);
        });
      }

    function showAlert(message, type) {
        const alertBox = document.createElement('div');
        alertBox.className = `alert ${type}`;
        alertBox.innerHTML = message;

        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.remove();
        }, 3000);
            
    }

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
                            <div className='containerIcon1' onMouseOver={showDescription1} onMouseOut={hideDescription1}>
                                <MdEmail className='contactIcon'/>
                                <a href="mailto:vitormerencio.1987@gmail.com" className='linkIcon'> 
                                    <h3 className='iconSubtitle' >Email</h3>                                   
                                </a>
                                <div className='iconDescription1'>
                                        <h3 className='iconName1'>vitormerencio.1987@gmail.com</h3>
                                        <FaRegCopy  className='copyIcon' onClick={copyContent1}/>
                                        

                                </div>
                                
                            </div>
                            <div className='containerIcon2' onMouseOver={showDescription2} onMouseOut={hideDescription2}>
                                <FaLinkedin className='contactIcon'/>
                                <a href="https://www.linkedin.com/in/vitor-mer%C3%AAncio-1bb176220/" target="_blank" className='linkIcon'> 
                                    <h3 className='iconSubtitle'>LinkedIn</h3> 
                                </a>
                                <div className='iconDescription2'>
                                        <h3 className='iconName2'>linkedin.com/in/vitor-mer%C3%AAncio-1bb176220/</h3>
                                        <FaRegCopy  className='copyIcon' onClick={copyContent2}/>
                                </div>
                            </div>
                            <div className='containerIcon3' onMouseOver={showDescription3} onMouseOut={hideDescription3}>
                            <FaSquarePhone  className='contactIcon'/>
                                    <h3 className='iconSubtitle'>Telefone</h3>
                                    <div className='iconDescription3'>
                                        <h3 className='iconName3'>6498177214</h3>
                                        <FaRegCopy  className='copyIcon' onClick={copyContent3}/>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact