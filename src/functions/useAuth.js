import { useRecoilState } from "recoil"
import { profileState } from "store/profileState"

const useAuth = () => {
  const [profile, setProfile] = useRecoilState(profileState)

  const login = () => {
    setProfile({
      username: "jenny",
      name: "Jenny",
      accessToken: "fake-access-token"
    })
  }

  const logout = () => {
    setProfile(null)
  }

  return {
    profile,
    login,
    logout
  }
}

export default useAuth
