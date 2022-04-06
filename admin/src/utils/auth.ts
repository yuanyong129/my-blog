import Cookies from 'js-cookie'

const TokenKey = 'token'

export const getToken = () => {
  return Cookies.get(TokenKey) ?? ''
}

export const setToken = (token: string) => {
  Cookies.set(TokenKey, token)
}