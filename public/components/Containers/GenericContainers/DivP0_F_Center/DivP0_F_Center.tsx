import styles from './DivP0_F_Center.styles';

function DivP0_F_Center(props: {
    children?: any,
    style: string
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

export default DivP0_F_Center;