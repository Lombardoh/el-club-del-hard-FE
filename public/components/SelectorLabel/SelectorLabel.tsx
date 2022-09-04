import styles from './SelectorLabel.styles';
function SelectorLabel(props: {
    name: string,
}){

    return (
        <select
            className = {styles.input}
            name={props.name}
        >
            <optgroup style={{
                fontSize:'20px'
            }}>
                <option value="none">---</option>
                <option value="oferta">En Oferta</option>
                <option value="destacado">Más Vendido</option>
            </optgroup>
            
        </select>
    );
}

export default SelectorLabel;