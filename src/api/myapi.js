import axios from "./axios"
const getUserById = (userId) => {
  return axios({
    method: 'get',
    url: '/user/xxxx',
    data: {
      // your data
    }
  })
}

export {
  getUserById,
}