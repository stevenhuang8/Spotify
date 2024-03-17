import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath :'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RAPIDAPI-Key', '513a94127emsh7fbdee4ec0c7e42p1addaejsn3f210ec0051b')

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/get-top-songs-in-world'}),
    })
});

export const {
    useGetTopChartsQuery
} = shazamCoreApi;