import styles from './FooterInsideTop.styles';
import Text36P from '../../Texts/Center/36P_White_Bold/Text36P_W';
import Text24P_L from '../../Texts/Left/24P_W/L_Text24P_W';

function FooterInsideTop(props: {
    title: string,
    content1: string,
    content2?: string,
    content3?: string,
}){

    return (
        <div
            className = {styles.container}
        >
            <Text36P text={props.title} />
            
            <div>
                <Text24P_L text={props.content1} /><br></br> 
                <Text24P_L text={props.content2} /><br></br> 
                <Text24P_L text={props.content3} /><br></br>
            </div>

        </div>
    );
}

export default FooterInsideTop;