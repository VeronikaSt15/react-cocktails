import { Routes, Route } from 'react-router-dom';
import Home from "./pages";
import Header from "./components/Header";
import SingleCocktail from "./components/SingleCocktail";


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/cocktails/:id" element={<SingleCocktail/>}/>
            </Routes>
        </>

    );
}

export default App;
