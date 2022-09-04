import styles from './FooterTop.styles';
import FooterInsideTop from '../FooterInsideTop/FooterInsideTop';

function FooterTop(props: {}){

    return (
        <div
            className = {styles.container}
        >
            <FooterInsideTop 
                title='Contáctenos' 
                content1='Whatsapp - ** ***-****'
                content2='Email: clubdelhard@gmail.com'
            />
            <FooterInsideTop 
                title='Atención al Cliente'
                content1='Horario de Atención: Lunes a Viernes - 8hs a 17hs'
                content2='Medio de Soporte: Whatsapp - ** ***-****'
            />
            <FooterInsideTop 
                title='Redes Sociales'
                content1='iconos'
            />
        </div>
    );
}

export default FooterTop;