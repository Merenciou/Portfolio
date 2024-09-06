import './Project.css';
import { useState } from 'react';
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

function Projects(){

    var [projectIndex, setProjectIndex] = useState(0);
    var [titleIndex, setTitleIndex] = useState('Viver');
    var [subtitleIndex, setSubtitleIndex] = useState('Viver é um aplicativo de bem estar para o dia a dia');
    var [buttonIndexOne, setButtonIndexOne] = useState('white');
    var [buttonIndexTwo, setButtonIndexTwo] = useState('grey');
    var [buttonIndexThree, setButtonIndexThree] = useState('grey');

    function previewFunction(){
        
            if(projectIndex > 0){
               setProjectIndex( projectIndex = projectIndex - 1);
               switch (projectIndex) {
                case 0:
                    setTitleIndex(titleIndex = 'Viver');
                    setSubtitleIndex(subtitleIndex = 'Viver é um aplicativo de bem estar para o dia a dia');
                    setButtonIndexOne(buttonIndexOne = 'white');
                    setButtonIndexTwo(buttonIndexTwo = 'grey');
                    setButtonIndexThree(buttonIndexThree = 'grey');                   
                    break;
                case 1:
                    setTitleIndex(titleIndex = 'Valorize');
                    setSubtitleIndex(subtitleIndex = 'Valorize é um aplicativo de pesquisa de preços em supermercados');
                    setButtonIndexOne(buttonIndexOne = 'grey');
                    setButtonIndexTwo(buttonIndexTwo = 'white');
                    setButtonIndexThree(buttonIndexThree = 'grey');                 
                    break;
                case 2:
                    setTitleIndex(titleIndex = 'ICondimento');
                    setSubtitleIndex(subtitleIndex = 'ICondimento é um aplicativo de informações culinárias');
                    setButtonIndexOne(buttonIndexOne = 'grey');
                    setButtonIndexTwo(buttonIndexTwo = 'grey');
                    setButtonIndexThree(buttonIndexThree = 'white');                           
                    break;
                default:
                    break;
               }
            }
            
        
        
        console.log(`${projectIndex}`);
        
    }

    function nextFunction(){
        if(projectIndex < 2){
            setProjectIndex( projectIndex = projectIndex + 1);
               switch (projectIndex) {
                case 0:
                    setTitleIndex(titleIndex = 'Viver');
                    setSubtitleIndex(subtitleIndex = 'Viver é um aplicativo de bem estar para o dia a dia');
                    setButtonIndexOne(buttonIndexOne = 'white');
                    setButtonIndexTwo(buttonIndexTwo = 'grey');
                    setButtonIndexThree(buttonIndexThree = 'grey');
                    break;
                case 1:
                    setTitleIndex(titleIndex = 'Valorize');
                    setSubtitleIndex(subtitleIndex = 'Valorize é um aplicativo de pesquisa de preços em supermercados');
                    setButtonIndexOne(buttonIndexOne = 'grey');
                    setButtonIndexTwo(buttonIndexTwo = 'white');
                    setButtonIndexThree(buttonIndexThree = 'grey');    
                    break;
                case 2:
                    setTitleIndex(titleIndex = 'ICondimento');
                    setSubtitleIndex(subtitleIndex = 'ICondimento é um aplicativo de informações culinárias');
                    setButtonIndexOne(buttonIndexOne = 'grey');
                    setButtonIndexTwo(buttonIndexTwo = 'grey');
                    setButtonIndexThree(buttonIndexThree = 'white');        
                    break;
                default:
                    break;
               }
        }
        
        console.log(`${projectIndex}`);

    }


    return(
        <div>
            <section id='projectsPage'>
                <div className='mainContainer'>
                    <RiArrowLeftSLine className='arrowLeft' onClick={previewFunction}/>
                    <img src="./viver.png" alt="projeto" className='projectImage' />
                    <RiArrowRightSLine className='arrowRight' onClick={nextFunction}/>
                </div>
                <div className='infoContainer'>
                    <h3 className='projectTitle'>{titleIndex}</h3>
                    <h4 className='projectSubtitle'>{subtitleIndex}</h4>
                </div>
                <div className='indexContainer'>
                    <button className='buttonIndex' style={{backgroundColor: `${buttonIndexOne}`}}></button>
                    <button className='buttonIndex' style={{backgroundColor: `${buttonIndexTwo}`}}></button>
                    <button className='buttonIndex' style={{backgroundColor: `${buttonIndexThree}`}}></button>


                </div>
            
            </section>
        </div>
    )
}

export default Projects