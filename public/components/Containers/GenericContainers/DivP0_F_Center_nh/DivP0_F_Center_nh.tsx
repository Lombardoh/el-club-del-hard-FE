import styles from './DivP0_F_Center_nh.styles';

function DivP0_F_Center_nh(props: {
    children?: any,
    style: string
}){
    const currentStyle=props.style
    return (
        <div
            className = {currentStyle=='column' ? styles.column : styles.smaller}
        >
            {props.children}
        </div>
    );
}

export default DivP0_F_Center_nh;