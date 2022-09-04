import styles from './LabelPromo.styles';
function LabelPromo(props: {
    text: string;
    disabled: boolean;
    style: string;
}){
    let currentStyle = props.style
    return (<>
        {props.disabled ? null :
            <div
                className = {currentStyle === "onSale" ? styles.onSale: styles.mostSold}
            >
                {props.text}
            </div>
        }
    </>);
}

export default LabelPromo;