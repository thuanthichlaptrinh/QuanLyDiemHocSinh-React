// decodeToken.js
const decodeToken = (token) => {
    const tokenData = token.split('.')[1];
    const decodedData = atob(tokenData);
    return JSON.parse(decodedData);
  };
  
  export default decodeToken;
  