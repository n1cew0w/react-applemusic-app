

import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useGetChartsRUQuery} from '../../store/shazamCore/shazamCore.api'
import Loader from "../../components/Loader/Loader";
import styles from "./MainPage.module.css"
import SongCard from "../../components/SongCard/SongCard";


export function MainPage() {
    const dispatch = useDispatch();


    const {data, isFetching, error} = useGetChartsRUQuery()
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    if (isFetching) return <Loader/>

    return (
        <div className={styles.mainPage_wrapper}>
            <div className={styles.songCard_container}>
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
};
