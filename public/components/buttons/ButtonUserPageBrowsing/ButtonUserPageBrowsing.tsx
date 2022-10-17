import styles from './ButtonUserPageBrowsing.styles';
import NextLink from '../../../../node_modules/next/link';

function ButtonUserPageBrowsing(props: {
    text: string;
    disabled?: boolean;
    style: string;
    onClick: Function;
    href: string;
}){
    let currentStyle = props.style
    return (
        <div
            onClick = { () => props.onClick()}
            className = {currentStyle=='left' ? styles.left : styles.right}
        >
            <NextLink href={props.href} className={styles.link} >
                <a className={styles.text}>{props.text}</a>
            </NextLink>
        </div>
    );
}

export default ButtonUserPageBrowsing;