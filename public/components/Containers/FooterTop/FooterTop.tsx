import styles from './FooterTop.styles';
import FooterInsideTop from '../FooterInsideTop/FooterInsideTop';
import Instagram from '../../icons/Instagram/Instagram';
import FooterIcons from '../FooterIcons/index';

function FooterTop(){
  return (
    <div className = {styles.container}>
      <FooterInsideTop 
        title='Contáctenos' 
        content1='Whatsapp 11 66107256'
        content2='Email: clubdelhard@gmail.com'
      />
      <FooterInsideTop 
        title='Atención al Cliente'
        content1='Horario de Atención: Lunes a Viernes - 8hs a 17hs'
      />
      <FooterIcons title='Redes Sociales'>
        <Instagram />
      </FooterIcons>
    </div>
  );
}

export default FooterTop;