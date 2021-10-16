import './Users.css'

export const Users = (props) => {
    return <ul className="users">
            {
                props.lst.map((x, i) => {
                    return <li key={x}>
                        <div className="userpic">
                            <img src={"https://picsum.photos/200/300?random=" + x}></img>
                            <div>
                                <div className="username">{props.names[i] == null ? "No Name" : props.names[i]}</div>
                                <div className="user-last-message">
                                    {props.phrases[i] == null ? 'Last seen 10 mins ago' : props.phrases[i]}
                                </div>
                            </div>
                        </div>
                        <div className="lastloggedin">
                            yesterday
                        </div>
                    </li>;
                })
            }
           </ul>
}