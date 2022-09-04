import styles from './DivP10_40_F_End.styles';

function DivP10_40_F_End(props: {
    children?: any,
    style: string,
}){
    const currentStyle=props.style
    return (
        <div
        className = {currentStyle=='column' ? styles.column : styles.row}
        >
            {props.children}
        </div>
    );
}

export default DivP10_40_F_End;