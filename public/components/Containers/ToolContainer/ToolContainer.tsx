import styles from './ToolContainer.styles';

function ToolContainer(props:{
    children?: any,
}){

return (<div className={styles.container}>
  {props.children}
</div>);
}

export default ToolContainer;