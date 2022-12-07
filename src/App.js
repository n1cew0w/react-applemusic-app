import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/Main/MainPage";
import {MusicHitsPage} from "./pages/MusicHits/MusicHitsPage";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from './index.css'
import {useSelector} from "react-redux";
import MusicPlayer from "./components/MusicPlayer";
import ArtistDetails from "./components/ArtistDetails/ArtistDetails";
import SongDetails from "./components/SongDetails/SongDetails";

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
                <Route path='/artist/:id' element={<ArtistDetails/>}/>
                <Route path='/songs/:songid' element={<SongDetails/>}/>
            </Routes>

        </>

    );
}

export default App;
