import Header from "./header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App(){
    return (
        <Router>
            <Header />
                <Routes>
                    <Route path="/"/>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
        </Router>
    )
}

export default App;