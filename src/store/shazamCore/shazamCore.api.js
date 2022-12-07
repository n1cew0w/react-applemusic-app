import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) =>{
            headers.set('X-RapidAPI-Key','dc2d04647fmshd2b1ec8c15a88b8p1d364bjsn860357e4fabc')

            return headers;
        },

    }),
    endpoints: (builder) => ({
        getChartsRU: builder.query({
            query:() => ({
                url: `/charts/country?country_code=RU`
            }),
        }),
        getSongDetails: builder.query({
            query: ({songid}) => ({
                url: `/tracks/details?track_id=${songid}`
            }),
        }),
        getSongRelated: builder.query({
            query: ({ songid }) =>({
                url: `/tracks/related?track_id=${songid}`
            })
        }),

    })
})

export const {useGetChartsRUQuery,useGetSongDetailsQuery,useGetSongRelatedQuery} = shazamCoreApi