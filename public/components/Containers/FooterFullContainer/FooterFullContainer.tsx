import styles from './FooterFullContainer.styles';
import FooterBottom from '../FooterBottom/FooterBottom';
import FooterTop from '../FooterTop/FooterTop';

function FooterFullContainer(props: {
    children?: any,
}){

    return (
        <div
            className = {styles.container}
        >
            <FooterTop />
            <FooterBottom copyrightText='© Copyright'/>
        </div>
    );
}

export default FooterFullContainer;