
const Login = () => {
  const domain = process.env.NODE_ENV === 'production'
    ? window.location.origin
    : process.env.REACT_APP_SERVER_DOMAIN

  const handleGoogleLogin = () => {
    window.location.replace(`${domain}/api/public/auth/google`)
  }

  handleGoogleLogin()

  return null
}

export default Login
