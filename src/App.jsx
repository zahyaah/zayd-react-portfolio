import NavigationBar from "./components/NavigationBar/NavigationBar.jsx"
import Card from "./components/Card/Card.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
    return (

        <div className="app-container">
            <NavigationBar/>
            <Card head="Languages"
                  values={["HTML5", "Java", "CSS3", "Python", "JavaScript", "C++", "Bash", "SQL"]}/>


            <Footer/>
        </div>

    )
}

export default App
