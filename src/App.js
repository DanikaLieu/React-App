import { BrowserRouter as Router, Route, Link, Routes }
    from "react-router-dom";
import Page1 from "./Components/page1"
import Secret from "./Components/secret"

// Import css
import "./App.css"

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<h1>Home Page</h1>} />
                    <Route exact path="page1" element={<Page1 />} />
					<Route exact path="secret" element={ <Secret /> } />
                </Routes>
                <div className="list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="page1">Page 1</Link></li>
						<li><Link to="secret">Secret</Link></li>
                    </ul>
                </div>
            </Router>
        </div>
    );
}
export default App;

