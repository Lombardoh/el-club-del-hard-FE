import styles from './BrandFilterContainer.styles';

function BrandFilterContainer(props: {
    children?: any,
    onClick: Function;
    alert: string;
}){

    return (
        <div
            onClick = {() => (
                alert(props.alert)
            )}
            className = {styles.container}
        >
            {props.children}
        </div>
    );
}

export default BrandFilterContainer;