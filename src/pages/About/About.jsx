import './About.css'

function About(){
    return (
        <div>
            <section id='aboutPage'>
                <div className='mainContainerAbout'>
                    <div className='containerAbout'>
                        <div className='containerPrimaryAbout'>
                            <h1 className='aboutTitle'>Sobre</h1>
                        </div>
                        <div className='containerSecondaryAbout'>
                            <h2 className='aboutSubtitle'>Me chamo Vitor Merencio, 
                                tenho 26 anos de idade. 
                                Iniciei meus estudos no mundo do desenvolvimento em 2021 
                                com Javascript no Desenvolvimento Web,
                                A dois atrás surgiu uma curiosidade no Flutter e utilizo até os dias atuais.    
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About