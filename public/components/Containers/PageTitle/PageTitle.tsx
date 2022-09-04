import styles from './PageTitle.styles';
import Text40P_B from '../../Texts/Center/40P_Bold/Text40P_B';

function PageTitle(props: {
    style: string,
    title: string,
}){
    const currentStyle=props.style
    return (
        <div
            className = {currentStyle === "center" ? styles.center : styles.left}
        >
            <Text40P_B text={props.title}/>
            
        </div>
    );
}

export default PageTitle;