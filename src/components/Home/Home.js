import Form from "../Form/Form";
import Banner from '../../images/banner.png';
import Logo from '../../images/blossom heart.png';
import Medicine from '../../images/medicine.png'

import './Home.css'

const Home = props => {
    return(
        <div className="container">
            <header>
                <div className="logo-div">
                <img src={Logo} className="logo" />
                <h3>Blossom Heart Hospital</h3>
                </div>

              
                <ul clasName="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Nav</li>
                </ul> 
            </header>

            <div className="banner-div">
                <div className="banner-desc">
                    <h3>Virtual Health care for you</h3>
                    <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                     the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before final copy is available.
                    </p>
                    <button className="action">Book appointment</button>
                </div>

                <div className="banner-img">
                    <img src={Banner} className="banner" alt="blossom-banner"/>
                </div>
            </div>

            <div className="service">
                <h3>Our services</h3>
                <p>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on meaningful content. 
                Lorem ipsum may be used as a placeholder before final copy is available.
                </p>

                <div className="sev-services">
                    <div className="card">
                      <img src={Medicine} alt="medicine-jar" />
                      <h5>Online pharmacy</h5>
                      <p>
                         In publishing and graphic design, Lorem ipsum is a placeholder
                         text commonly used to demonstrate the
                      </p>
                    </div>
                    <div className="card">
                    <img src={Medicine} alt="medicine-jar" />
                      <h5>Online pharmacy</h5>
                      <p>
                         In publishing and graphic design, Lorem ipsum is a placeholder
                         text commonly used to demonstrate the
                      </p>
                    </div>
                    <div className="card">
                    <img src={Medicine} alt="medicine-jar" />
                      <h5>Online pharmacy</h5>
                      <p>
                         In publishing and graphic design, Lorem ipsum is a placeholder
                         text commonly used to demonstrate the
                      </p>
                    </div>
                    <div className="card">
                    <img src={Medicine} alt="medicine-jar" />
                      <h5>Online pharmacy</h5>
                      <p>
                         In publishing and graphic design, Lorem ipsum is a placeholder
                         text commonly used to demonstrate the
                      </p>
                    </div>
                </div>
            </div>

            
          
        </div>
    )
}

export default Home;