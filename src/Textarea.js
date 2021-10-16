export const Textarea = (props) => {
  
    let str = '';
    props.chat.forEach(element => {
        str += element + "\n";
    });
    return <textarea value={str}></textarea>

}