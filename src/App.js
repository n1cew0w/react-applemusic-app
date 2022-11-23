import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/Main/MainPage";
import {MusicHitsPage} from "./pages/MusicHits/MusicHitsPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/music_hits' element={<MusicHitsPage/>}/>
            </Routes>

        </>

    );
}

export default App;
