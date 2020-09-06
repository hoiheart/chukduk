export const hasViewHistory = (menu, id) => {
  const session = window.sessionStorage.getItem(menu) ? JSON.parse(window.sessionStorage.getItem(menu)) : {}

  if (session[id]) {
    return true
  } else {
    session[id] = true
    window.sessionStorage.setItem(menu, JSON.stringify(session))
    return false
  }
}
