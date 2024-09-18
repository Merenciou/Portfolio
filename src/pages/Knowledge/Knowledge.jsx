import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import './Knowledge.css';
import { useState } from 'react';

function Knowledges(){

    var [pathImg] = useState(['flutter', 'dart', 'javascript', 'react', 'firebase', 'nodejs', 'cleancode', 'html', 'css', 'github']);
    var [knowledgeName] = useState(['Flutter', 'Dart', 'Javascript', 'React', 'Firebase', 'Node.js', 'Clean Code', 'HTML', 'CSS', 'Github']);
    var [knowledgeIndex, setKnowledgeIndex] = useState(0);

    function previewFunction(){
        if(knowledgeIndex > 0){
            setTimeout(() => {
                setKnowledgeIndex(knowledgeIndex - 1);
            }, 200);
            
        }
        
    }

    function nextFunction(){
        if(knowledgeIndex < 7){
            setTimeout(() => {
                setKnowledgeIndex(knowledgeIndex + 1)
            }, 200);
            
        }

    }

    return (
        <div>
            <section id="knowledgesPage">
            <div className='mainContainerKnowledges'>
                <div className='containerPrimaryKnowledge'>
                    <h1 className='mainTitle'>Conhecimentos</h1>

                </div>
                <div className='containerSecondaryKnowledge'>
                    <RiArrowLeftSLine className='arrowLeft' onClick={previewFunction} />
                        <div className='card'>
                            <div className='containerImg'>
                                <img src={`${pathImg[knowledgeIndex + 0]}.png`} alt="projectImgs" className='knowlegdesImgs' />                           
                            </div>
                            <h3 className='knowledgeTitle'>{knowledgeName[knowledgeIndex + 0]}</h3>
                        </div>
                        <div className='card'>
                            <div className='containerImg'>
                                <img src={`${pathImg[knowledgeIndex + 1]}.png`} alt="projectImgs" className='knowlegdesImgs' />
                            </div>
                            <h3 className='knowledgeTitle'>{knowledgeName[knowledgeIndex + 1]}</h3>
                        </div>
                        <div className='card'>
                            <div className='containerImg'>
                                <img src={`${pathImg[knowledgeIndex + 2]}.png`} alt="projectImgs" className='knowlegdesImgs' />
                            </div>
                            <h3 className='knowledgeTitle'>{knowledgeName[knowledgeIndex + 2]}</h3>
                        </div> 
                    <RiArrowRightSLine className='arrowRight' onClick={nextFunction} />

                </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Knowledges