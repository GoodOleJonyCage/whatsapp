export const Textarea = (props) => {
    console.log(props.chat);
    let str = '';
    props.chat.forEach(element => {
        str += element + "\n";
    });
    return <textarea value={str}></textarea>

}