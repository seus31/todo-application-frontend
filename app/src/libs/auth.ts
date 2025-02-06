export const setAdminAccessToken = (token: string) => {
    return localStorage.setItem('admin_token', token)
}

export const getAdminAccessToken = () => {
    return localStorage.getItem('admin_token')
}

export const removeAdminAccessToken = () => {
    return localStorage.removeItem('admin_token')
}

export const setAccessToken = (token: string) => {
    return localStorage.setItem('token', token)
}

export const getAccessToken = () => {
    return localStorage.getItem('token')
}

export const removeAccessToken = () => {
    return localStorage.removeItem('token')
}
