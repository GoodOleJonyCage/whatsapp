import './textarea.css'
import {getCurrentDate} from './FirebaseService'

export const Textarea = (props) => {
  
    let str = '';
    props.chat.forEach(element => {
        str += element + "\n";
    });
    
    return  <div className="chat" >
              {
               props.chat.map(msg => {
                   return <div className="message">
                            <div className="messagetext">{msg}</div>
                            <div className="date">{getCurrentDate()}</div>
                        </div>
                    })
                }
            </div>;
     
}