import IMAGES from "./images/images.js"
import person from './images/person.png';
import pic_1 from './images/pic-1.jpg';
import pic_2 from './images/pic-2.jpg';
import pic_3 from './images/pic-3.jpg';
import pic_4 from './images/pic-4.jpg';
import Card from './components/cards.js'
import ProjCard from './components/projectCard.js'
import Numbers from './components/numbers.js'
import './App.css';

let links = "https://samhith.netlify.app"

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">
            <img src={IMAGES.logo} alt="" ></img>
        </div>
        <div className="nav-list">
            <a href={links}>Home</a>
            <a href={links}>PROJECT</a>
            <a href={links}>ABOUT</a>
            <a href={links}>CONTACT</a>
            <a href={links}>OTHERPAGE</a>
        </div>
        <div className="menu-icon">
            <img src={IMAGES.menu} alt="" ></img>
        </div>
    </nav>
    <div className="hero-container">
        <div className="hero-img">
        <img src={person} alt="Person" />
        </div>
        <div className="hero-content">
            <h2>Hello I'm Arthur</h2>
            <h1>Visual Designer</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quidem alias dolorem! Consequatur aspernatur
                cupiditate laudantium fugit perspiciatis commodi nostrum.</p>
            <button>ABOUT ME</button>
        </div>
    </div>
    <div className="projects">
        <div className="project-cards">
          <ProjCard svg={IMAGES.projCard1} heading="UI Design" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit." link={links}/>
          <ProjCard svg={IMAGES.projCard2} heading="Product Design" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit." link={links}/>
          <ProjCard svg={IMAGES.projCard3} heading="Branding" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit." link={links}/>
        </div>
        <div className="project-statestics">
            <div className="experience">
                <h1>12</h1>
                <p>Year Experience</p>
            </div>
            <div className="counts">
              <Numbers numbers="60+" paragraph="Clints"/>
              <Numbers numbers="08" paragraph="Year Experience"/>
              <Numbers numbers="122+" paragraph="Completed Projects"/>
              <Numbers numbers="10" paragraph="Achievments"/>
            </div>
        </div>
    </div>
    <div className="features">
        <div className="header">
            <div className="header-texts">
                <h1>FEATURED PROJECTS</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
            </div>
            <div className="features-button">
                <button className="features-btn">VIEW ALL</button>
            </div>
        </div>
        <div className="features-cards">
           <Card CardImg={pic_1} cardHeading ="The Vintage" link={links}/>
           <Card CardImg={pic_2} cardHeading ="Foodasa" link={links}/>
           <Card CardImg={pic_3} cardHeading ="Marco Accent" link={links}/>
           <Card CardImg={pic_4} cardHeading ="Mozaik" link={links}/>
        </div>
    </div>
    <div className="contact">
        <div className="contact-text">
            <h1>Let's work together on your next project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, doloribus?</p>
        </div>
        <div className="contact-button">
            <button>CONTACT</button>
        </div>
    </div>
    <div className="nav-bottom">
        <a href={links}>HOME</a>
        <a href={links}>ABOUT</a>
        <a href={links}>PROJECTS</a>
        <a href={links}>CONTACT</a>
    </div>
    <footer>
        <div className="footer-logo"><img src={IMAGES.logo} alt="" ></img></div>
        <div className="footer-icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18">
                <path id="fb"
                    d="M430.742,360v-9.123H433.8l.458-3.555h-3.52v-2.27c0-1.03.285-1.731,1.762-1.731h1.882v-3.18a25.386,25.386,0,0,0-2.743-.14c-2.714,0-4.573,1.657-4.573,4.7v2.622H424v3.555h3.07V360Z"
                    transform="translate(-424 -340)" fill="#fff" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18">
                <path id="twitter"
                    d="M508,343.157a9.329,9.329,0,0,1-2.6.707,4.562,4.562,0,0,0,1.991-2.51,9,9,0,0,1-2.871,1.106,4.5,4.5,0,0,0-7.43,1.217,4.554,4.554,0,0,0-.27,2.918,12.787,12.787,0,0,1-9.3-4.743,4.613,4.613,0,0,0-.6,2.288,4.549,4.549,0,0,0,.53,2.138,4.5,4.5,0,0,0,1.472,1.632,4.44,4.44,0,0,1-2.046-.563v.055a4.527,4.527,0,0,0,3.63,4.422,4.316,4.316,0,0,1-1.21.188,5.344,5.344,0,0,1-.847-.077,4.526,4.526,0,0,0,4.213,3.14,9.01,9.01,0,0,1-5.566,1.945,8.6,8.6,0,0,1-1.1-.066,12.836,12.836,0,0,0,16.055-1.7,12.849,12.849,0,0,0,3.745-9.173V345.5a9.307,9.307,0,0,0,2.2-2.343Z"
                    transform="translate(-486 -341)" fill="#fff" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17.999" viewBox="0 0 26 17.999">
                <path id="youtube"
                    d="M585.994,347.344a9.768,9.768,0,0,0-1.075-4.806,3.464,3.464,0,0,0-2.031-1.164,137.529,137.529,0,0,0-19.736-.011,3.4,3.4,0,0,0-1.724.861c-1.063.966-1.181,2.618-1.3,4.014a55.149,55.149,0,0,0,0,7.541,10.906,10.906,0,0,0,.354,2.327,3.627,3.627,0,0,0,.838,1.582,3.4,3.4,0,0,0,1.76.908,54.1,54.1,0,0,0,7.677.384c4.134.058,7.76,0,12.047-.326a3.417,3.417,0,0,0,1.807-.907,2.891,2.891,0,0,0,.721-1.164,12.172,12.172,0,0,0,.614-3.956C585.994,351.975,585.994,348.042,585.994,347.344Zm-15.661,5.981v-7.2l6.992,3.619C575.364,350.811,572.778,352.022,570.333,353.325Z"
                    transform="translate(-560 -341)" fill="#fff" />
            </svg>

        </div>
    </footer>
    </div>
  );
}

export default App;
