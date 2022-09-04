import styles from './LabelStock.styles';
function LabelStock(props: {
    text: string;
    disabled: boolean;
    style: string;
}){
    let currentStyle = props.style
    return (<>
        {props.disabled ? null :
            <div
                className = {currentStyle === "onStock" ? styles.onStock: styles.noStock}
            >
                {props.text}
            </div>
        }
    </>);
}

export default LabelStock;