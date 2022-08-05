import styles from './ClickableContainer.styles';

function ClickableContainer(props: {
    children: any;
    style: string;
}){
    let currentStyle = props.style
    return (
        <div
            className = {currentStyle === "column" ? styles.column : styles.row}
        >
            {props.children}
        </div>
    );
}

export default ClickableContainer;