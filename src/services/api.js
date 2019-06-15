import axios from 'axios'
const token = localStorage.getItem('token')
export default axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  },
  baseURL: 'https://donarya-be.herokuapp.com/api'
})