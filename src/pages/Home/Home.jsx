import './Home.css';

function Home() {
    return (
        <div>
            <section id="homePage">
                <div className='mainContainerHome'>
                    <div className='containerPrimaryHome'>
                        <h1 className='homepageTitle'>
                            <span>Vitor </span>
                            <span>Merencio</span>
                             </h1>
                        <h2 className='homepageSubtitle'>Desenvolvedor de Software</h2>
                    </div>
                    <div className='containerSecondaryHome'>
                        <img className='illustration' src="./profile.png" alt="" width={750}/>
                    </div>

                </div>
            
        </section>

        </div>
        

        
        
    )
    
}

export default Home