import styles from './InputGeneric.styles';
function InputGeneric(props: {
    type: 'text'|'number'|'password'|'email'|'textarea'|'file',
    name: string,
}){
    let currentClassName=`${styles.input}`
    switch(props.type){
        case 'file':
            currentClassName=`${styles.file}`;
            break;
        case 'textarea':
            currentClassName=`${styles.textarea}`;
            break;
        default:
            currentClassName=`${styles.input}`;
            break;
    }

    return(<>
        {props.type=='textarea'?
            <textarea
                className = {currentClassName}
                name={props.name}
                rows={4}
                cols={50}
            ></textarea>:
            <input
            className = {currentClassName}
            type={props.type}
            name={props.name}
        />
        }
    </>);
}

export default InputGeneric;