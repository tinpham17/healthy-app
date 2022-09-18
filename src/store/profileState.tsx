import { atom, AtomEffect } from "recoil"
import { Profile } from "types/profile"

export const PROFILE_STATE_LS_KEY = "PROFILE"

const localStorageEffect: AtomEffect<Profile | null> = (params) => {
  const savedValue = localStorage.getItem(PROFILE_STATE_LS_KEY)
  if (savedValue !== null) {
    params.setSelf(JSON.parse(savedValue))
  }

  params.onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(PROFILE_STATE_LS_KEY)
      : localStorage.setItem(PROFILE_STATE_LS_KEY, JSON.stringify(newValue))
  })
}

export const profileState = atom<Profile | null>({
  key: "profileState",
  default: null,
  effects: [
    localStorageEffect
  ]
})
