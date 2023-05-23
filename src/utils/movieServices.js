import axios from "axios";
const axios = require('axios');

const nowShowingData = () => {

}


const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTA5NzMzZjI3Nzg2M2MyNGE0OGI5OTNhYTVhNGM2OCIsInN1YiI6IjY0NmM0ZTQxYzM1MTRjMmIwODUxY2IwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VFRhclXQMxnEI9DhcKNXMZekhxWaNKu7uB4v9EHqhv0'
    }
};

axios.request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });