export const RECEIVE_USERS = 'users/RECEIVE_USERS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}