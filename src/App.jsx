import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
    return (
        <div className="App">
            <main>
                <div className="container">
                    <div className="wrapper">
                        <About />
                        <Projects></Projects>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
