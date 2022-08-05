import styles from './FooterInsideTop.styles';
import Text36P from '../../Texts/Center/36P_White_Bold/Text36P_W';
import Text24P_L from '../../Texts/Left/24P_W/L_Text24P_W';


import Text24P_W from '../../Texts/Center/24P_White/Text24P_W';
import Text16P_W from '../../Texts/Center/16P_White/Text16P_W';
import {useState, useEffect} from 'react';

function FooterInsideTop(props: {
    title: string,
    content1: string,
    content2?: string,
    content3?: string,
}){

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if(windowWidth){
            window.addEventListener('resize', () => {
                setWindowWidth(window.innerWidth);
            });
        }
    }, [windowWidth]);

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