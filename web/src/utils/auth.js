const TOKEN = 'token'
const USERNAME = 'username'

export function setToken(token) {
  localStorage.setItem(TOKEN, token)
}

export function getToken() {
  return localStorage.getItem(TOKEN)
}

export function setUsername(username) {
  localStorage.setItem(USERNAME, username)
}

export function getUsername() {
  return localStorage.getItem(USERNAME)
}

export function clearAll() {
  localStorage.clear()
}