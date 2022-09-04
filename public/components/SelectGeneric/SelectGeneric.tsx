import styles from './SelectGeneric.styles';
function SelectGeneric(props: {
    name?: string,
    onChangeValue?: any,
    value?: any,
    required?: boolean,
    children: any,
}){

    return(
        <select className={styles.input} onChange={props.onChangeValue}>
            {props.children}
        </select>
    );
}

export default SelectGeneric;