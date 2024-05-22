import NavigationBar from "./components/NavigationBar/NavigationBar.jsx"
import Card from "./components/Card/Card.jsx"
import Footer from "./components/Footer/Footer.jsx"
import zayd from "./assets/zayd.webp"


function App() {
    return (
        <div className="app-container">
            <NavigationBar/>

                <div className="aboutMe">
                    <h3 className="montserrat-zayd">Zayd Ahmed</h3>
                    {/*<img src={ zayd } alt="I am Zayd" />*/}
                    <div className="montserrat-content">
                        CSE Junior @ CMR College of Engineering and Technology, Hyderabad.
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
