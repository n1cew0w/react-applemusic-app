import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/Main/MainPage";
import {MusicHitsPage} from "./pages/MusicHits/MusicHitsPage";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from './index.css'
import {useSelector} from "react-redux";
import MusicPlayer from "./components/MusicPlayer";

function App() {
    const { activeSong } = useSelector((state) => state.player);
    return (
        <>
            <Sidebar/>
            {activeSong?.title && (
                <div className={styles.music_player}>
                    <MusicPlayer />
                </div>
            )}
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/music_hits' element={<MusicHitsPage/>}/>
            </Routes>

        </>

    );
}

export default App;
