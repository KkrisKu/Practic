import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App(){
    return (
        <div className="App">
            <Header />
            <main>
                <h1>Hello World</h1>
            </main>
            <Footer />
        </div>
    );
}
export default App;