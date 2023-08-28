import axios from 'axios';

export const postApiCall = ({endpointUrl, headers, requestPayload}) => {
  axios
    .post(endpointUrl, requestPayload, {headers})
    .then(response => {
      // Handle the response data here
      console.log('Response:', response.data);
    })
    .catch(error => {
      // Handle any error here
      console.log('Error:', error);
    });
};
