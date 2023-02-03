const API_KEY = 'bda7f0556e91410176964bfc9666ef72';

const requests = {
        fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHoror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests