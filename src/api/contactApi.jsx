import axios from "./axiosInstance"

export const sendContact =async(payload)=>{
    const res= await axios.post('/contact/send',payload)
    return res.data
}

export const getContacts = async()=>{
    const res = await axios.get('/contact')
    return res.data
}

export const deleteContact = async (id) => {
  const res = await axios.delete(`/contact/${id}`);
  return res.data;
};