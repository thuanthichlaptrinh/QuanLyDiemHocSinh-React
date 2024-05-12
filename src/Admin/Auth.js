import axios from 'axios';

// Function to set token in axios headers
const setAuthToken = (token) => {
  if (token) {
    // Set token in header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Remove token from header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;