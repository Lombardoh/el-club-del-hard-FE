import styles from './FooterBottom.styles';
import Text20P_White from '../../Texts/Center/20P_Buttons_White/Text20P_White';

function FooterBottom(props: {
    copyrightText: string,
}){

    return (
        <div
            className = {styles.container}
        >
            <Text20P_White text={props.copyrightText} />
        </div>
    );
}

export default FooterBottom;