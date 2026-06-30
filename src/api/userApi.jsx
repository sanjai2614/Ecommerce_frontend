import axios from './axiosInstance'

//Signup POST
export const signupUser = async (payload) => {
  const res = await axios.post('/signup', payload)
  return res.data
}

//Login POST
export const loginUser = async (payload) => {
  const res = await axios.post('/login', payload)
  return res.data
}

// Logout

export const logout = async () => {
  const { data } = await axios.post("/logout");
  return data;
};

// get users

export const getUsers = async () => {
  const res = await axios.get('/admin/users')
  return res.data.data
}

// get user

export const getUser = async () => {
  try {
    const { data } = await axios.get("/profile");

    return data.user ?? null;
  } catch (err) {
    if (err.response?.status === 401) {
      return null;
    }

    throw err;
  }
};
