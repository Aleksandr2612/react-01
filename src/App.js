
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import './App.css';

function App(){
const Person = {
    name: 'Peter',

    age: 24,
    gender: 'male'
    }
    const routes =['home', 'about as', 'contact', 'news'];

    return (
        <div className='App'>
        <Header routes={routes}/>
            <main>
        <h1>Manchester United!!!</h1>
                <h2>create Git and Github</h2>
            <Content person={Person}/>
            </main>
            <Footer/>
    </div>
    )
}

export default App;
