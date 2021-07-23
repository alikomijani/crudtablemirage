import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router';
import { loginUser } from '../../store/reducers/auth.reducer/auth.reducer';
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.auth.isLogin)
    if (isLogin) {
        return <Redirect to='/' />
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({ token: '123', refreshToken: '123', username: username }))
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-12 col-lg-6  mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group  mt-4">
                            <label htmlFor="username">username</label>
                            <input
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                type="text"
                                className="form-control mt-2"
                                name="username"
                                id="username"
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="password">password</label>
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                className="form-control mt-2"
                                name="password"
                                id="password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">login</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
