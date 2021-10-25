import { useState } from 'react'
import './Users.css'

export const Users = (props) => {

    const [selecteduser, setselecteduser] = useState({});
    return props.userlist == null ? <div>Loading...</div> :
        <ul className="users">
            {
                props.userlist.map((user, i) => {
                    return <li
                        className={selecteduser == user ? 'selected-user' : ''}
                        key={user.name} onClick={() => { props.assignUser(user.name); setselecteduser(user); }}
                    >
                        <div className="userpic">
                            <img src={"https://picsum.photos/200/300?random=" + i}></img>
                            <div>
                                <div className="username">
                                    {/* {props.names[i] == null ? "No Name" : props.names[i]} */}
                                    {user.name}
                                </div>
                                <div className="user-last-message">
                                    {/* {props.phrases[i] == null ? 'Last seen 10 mins ago' : props.phrases[i]} */}
                                    Last seen 10 mins ago
                                </div>
                            </div>
                        </div>
                        <div className="lastloggedin">
                            yesterday
                        </div>
                    </li>
                })
            }
        </ul>
}