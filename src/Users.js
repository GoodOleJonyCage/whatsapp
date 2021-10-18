import {useState} from 'react'
import './Users.css'

export const Users = (props) => {

    // const users = [{ email: 'test1@gmail.com', name: 'Jonny' },
    //                { email: 'test2@gmail.com', name: 'Kim' }];

    const users = ['maqsood.ahsan.khan@gmail.com','whatsappdev98@gmail.com'];
    const[selecteduser, setselecteduser] = useState({});
    
    return <ul className="users">
        {
            users.map((user, i) => {
                return <li 
                className={selecteduser == user ? 'selected-user' : ''}
                key={user} onClick={() => {props.assignUser(user);setselecteduser(user);}} >
                    <div className="userpic">
                        <img src={"https://picsum.photos/200/300?random=" + i}></img>
                        <div>
                            <div className="username">
                                {/* {props.names[i] == null ? "No Name" : props.names[i]} */}
                                {user}
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