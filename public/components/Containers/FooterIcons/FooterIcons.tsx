import styles from './FooterIcons.styles';
import Text36P from '../../Texts/Center/36P_White_Bold/Text36P_W';

function FooterInsideTop(props: {
    title: string,
    children?: any
}){
  return (
    <div className = {styles.container}>
      <Text36P text={props.title} />
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default FooterInsideTop;