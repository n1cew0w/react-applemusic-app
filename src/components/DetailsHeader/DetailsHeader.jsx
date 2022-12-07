import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DetailsHeader.module.css'

const DetailsHeader = ({ artistId, artistData, songData }) => (
    <div className={styles.details_header_wrapper}>
        <div className={styles.details_header} />

        <div className={styles.details_pos}>
            <img
                alt="profile"
                src={
                    artistId ? artistData?.artists[artistId].attributes?.artwork?.url
                            .replace('{w}', '500')
                            .replace('{h}', '500')
                        : songData?.images?.coverart
                }
                className={styles.details_img}
            />

            <div className={styles.details_text}>
                <p className={styles.details_artist}>
                    {artistId ? artistData?.artists[artistId].attributes?.name : songData?.title}
                </p>
                {!artistId && (
                    <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
                        <p className={styles.details_song}>{songData?.subtitle}</p>
                    </Link>
                )}

                <p className={styles.details_song_text}>
                    {artistId
                        ? artistData?.artists[artistId].attributes?.genreNames[0]
                        : songData?.genres?.primary}
                </p>
            </div>
        </div>

        <div className={styles.details_hz} />
    </div>
);

export default DetailsHeader;