import styles from './TestComponent.styles';
function TestComponent(props: {
    text: string;
    onClick: Function;
    disabled: boolean;
}){

    return (
        <div
            onClick = { () => props.onClick()}
            className = {styles.container}
        >
            {props.disabled ? null : props.text}
        </div>
    );
}

export default TestComponent;