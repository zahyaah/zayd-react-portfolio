import NavigationBar from "./components/NavigationBar/NavigationBar.jsx"
import Card from "./components/Card/Card.jsx"


function App() {
    return (
        <div className="app-container">
            <NavigationBar />
            <div className="background-image">
                <br/>
                <br/>
                <Card head="Languages"
                      values={["HTML5", "Java", "CSS3", "Python", "JavaScript", "C++", "Bash", "SQL"]}/>

            </div>
        </div>
    )
}

export default App
