import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

const setAuthToken = (token) => {
  if (token) {
    // Nếu có token, đặt token vào header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Nếu không có token, xóa token từ header
    delete axios.defaults.headers.common['Authorization'];
  }
};


class AuthenticationService {
  signup(signupData) {
    return axios.post(`${API_URL}/signup`, signupData);
  }

  signin(signinData) {
    return axios.post(`${API_URL}/signin`, signinData);
  }

  signout(signoutData, token) {
    return axios.post(`${API_URL}/signout`, signoutData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  verifyEmail(token) {
    return axios.put(`${API_URL}/verify-email`, null, {
      params: {
        token: token
      }
    });
  }
  
}

export default new AuthenticationService();
