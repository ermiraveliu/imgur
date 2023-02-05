

interface AboutProps {
    
}
 
const About: React.FC<AboutProps> = () => {
    return ( 
        <>

            <div id="pg3" className="pg w-full flex justify-start">
                <div className="user-about"> 
                    <div className="user-about-sidebar">
                        <div>
                            <h1>ABOUT</h1>
                            <p>I like pukeM more</p>
                        </div>
                        <div>
                            <h1>JOINED</h1>
                            <h3>October 5, 2020</h3>
                        </div>
                        <div>
                            <h1>INTERNET POINTS</h1>
                            <h3>206,948</h3>
                        </div>
                        <div>
                            <h1>NOTORIETY</h1>
                            <h3>Glorious</h3>
                        </div>
                    </div>
                    <div className="user-about-trophies">
                        <h1>TROPHIES</h1>
                        <div className="trophy-container">
                            <div className="trophy trophy1">
                                <img className="trophy-img" src="https://s.imgur.com/images/trophies/2_years.png" alt=""/>
                                <p className="text-xs">2 YEARS</p>
                            </div>
                            <div className="trophy trophy2">
                                <img className="trophy-img" src="https://s.imgur.com/images/trophies/joined_imgur.png" alt=""/>
                                <p className="text-xs">JOINED IMGUR</p>
                            </div>
                            <div className="trophy  trophy3">
                                <img className="trophy-img" src="https://s.imgur.com/images/trophies/contributor.png" alt=""/>
                                <p className="text-xs">CONTRIBUTOR</p>
                            </div>
                            <div className="trophy trophy4">
                                <img className="trophy-img" src="https://s.imgur.com/images/trophies/steal_your_thunder.png" alt=""/>
                                <p className="text-xs w-20 text-center">STEAL YOUR THUNDER</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
     );
}
 
export default About;