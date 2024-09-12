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
                            <h2 className='aboutSubtitle'>Me chamo Vitor Merencio, <br />
                                tenho 26 anos de idade. <br />
                                Iniciei meus estudos no mundo do desenvolvimento em 2021 <br />
                                com Javascript no Desenvolvimento Web,<br />
                                A dois atrás surgiu uma curiosidade no Flutter e utilizo até os dias atuais.<br />    
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About