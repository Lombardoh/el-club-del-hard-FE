import styles from './LabelPromo2nd.styles';
function LabelPromo2nd(props: {
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

export default LabelPromo2nd;