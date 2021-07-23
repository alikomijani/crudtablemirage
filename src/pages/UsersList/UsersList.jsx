import React from 'react'
import './userlists.style.css'
import { useHistory } from 'react-router'
import { useSelector , useDispatch } from 'react-redux'
import UsersLitsHook from './UsersLitsHook'
import { logoutUser } from '../../store/reducers/auth.reducer/auth.reducer'
function UsersList() {
    const dispatch = useDispatch()
    const username = useSelector(state => state.auth.username)
    const history = useHistory()
    const [users, loading, error, filters, setFilters] = UsersLitsHook('api/users')
    if (error) return (<div> 500 server error please retray again</div>)
    return (
        <div>
            <header style={{display:'flex' , justifyContent:'space-between' ,padding:25}}>
                {username}
                <button onClick={()=>{
                    dispatch(logoutUser())
                }}>logout</button>
            </header>
            <div className='container'>
                <form className="form-inline">
                    <div class="form-group">
                        <label htmlFor="search">search</label>
                        <input type="text" name="search" id="search"
                            value={filters.first_name}
                            onChange={(e) => setFilters({ first_name: e.target.value })}
                            className="form-control" placeholder="search" />
                    </div>
                </form>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginTop: 40
                }}>
                    <table className='styled-table'>
                        <thead>
                            <tr>
                                <th>
                                    {"id".toUpperCase()}
                                </th>
                                <th>
                                    {'display name'.toUpperCase()}
                                </th>
                                <th>
                                    {"email".toUpperCase()}
                                </th>
                                <th>
                                    {"phone".toUpperCase()}
                                </th>
                                <th>
                                    {'role'.toUpperCase()}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? <tr><td style={{
                                textAlign: 'center'
                            }} colSpan={5}>there is no users</td></tr> :
                                users.length === 0 ? <tr><td style={{
                                    textAlign: 'center'
                                }} colSpan={5}>there is no users</td></tr> :
                                    users.map((user) => (
                                        <tr key={user.id} onClick={() => history.push(`/${user.id}`)}>
                                            <td>{user.id}</td>
                                            <td>{`${user.first_name} ${user.lastName}`}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.role}</td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                    <div>
                        <button className='btn btn-success' onClick={() => history.push('/create')}>
                            create a new user
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UsersList
