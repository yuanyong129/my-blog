import http from '@/utils/http'
export const usersUrl = 'users'
export const rolesUrl = 'roles'
export const menusUrl = 'menus'
export const loginUrl = 'auth/login'

export function getMenu() {
  return http.get('auth/menu')
}