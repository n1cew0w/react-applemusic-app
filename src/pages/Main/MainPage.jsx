

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
            {/*<div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">*/}
            {/*    <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>*/}

            {/*    <select*/}
            {/*        onChange={(e) => dispatch(selectGenreListId(e.target.value))}*/}
            {/*        value={genreListId || 'pop'}*/}
            {/*        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"*/}
            {/*    >*/}
            {/*        {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}*/}
            {/*    </select>*/}
            {/*</div>*/}

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
