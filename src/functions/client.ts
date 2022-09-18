import axios from "axios"
import { PROFILE_STATE_LS_KEY } from "store/profileState"

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL
})

client.interceptors.request.use((config) => {
  const savedValue = localStorage.getItem(PROFILE_STATE_LS_KEY)
  if (config && config.headers && savedValue) {
    try {
      const profile = JSON.parse(savedValue)
      if (profile.accessToken) {
        config.headers["Authorization"] = `Bearer ${profile.accessToken}`
      }
    } catch {}
  }
  return config
})

export default client
