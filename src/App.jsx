import NavigationBar from "./components/NavigationBar/NavigationBar.jsx"
import Card from "./components/Card/Card.jsx"
import Footer from "./components/Footer/Footer.jsx"
import zayd from "./assets/zayd.webp"
// import MenuMobile from "./components/MenuMobile/MenuMobile.jsx";


function App() {
    return (
        <div className="app-container">
            {/*<MenuMobile />*/}
            <NavigationBar/>

                <div className="aboutMe">
                    <h3 className="montserrat-zayd">Zayd Ahm<span className="textOver">ed</span></h3>
                    <img src={ zayd } alt="I am Zayd" />
                    <div className="montserrat-content">
                        CSE Junior @ CMR Co<span className="textOver">llege of</span> Engineering and Tech<span className="textOver">nology,</span> Hyderabad.
                    </div>
                </div>

                <div className="skills">
                    <h3>Skills</h3>
                    <Card head="Languages"
                      values={["HTML5", "Java", "CSS3", "Python", "JavaScript", "C++", "Bash", "SQL"]} />

                    <Card head="Technologies"
                          values={["React", "Django", "OpenAI", "GraphQL", "GitHub"]} />
                </div>
            <Footer/>
        </div>
    )
}

export default App
