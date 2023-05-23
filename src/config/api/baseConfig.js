const axios = require('axios').default;

const baseUrl = "https://api.themoviedb.org/3/"

async function get(urlParams, paramsObj) {
    return axios(baseUrl.join(urlParams), {
      method: 'get',
      params: {paramsObj},
      headers: {
        'Content-Type': 'application/json',
        Authorization: import.meta.env.AUTH_BEARER,
      },
    }).then(
      (res) => {
        if (res.data) {
          return res.data;
        }
      },
      (e) => {
        if (e.response?.status === 401) {
          alert('Somethings wrong');
          return;
        }
  
        return e.response?.data ? e.response.data : e.response;
      },
    );
  }

  export { get };
  