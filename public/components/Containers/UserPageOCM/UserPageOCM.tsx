import styles from './UserPageOCM.styles';
import Text16P from '../../Texts/Center/16P/Text16P';

import Text16P_G from '../../Texts/Center/16P_Green/Text16P_G';
import Text16P_R from '../../Texts/Center/16P_Red/Text16P_R';
import Text16P_B from '../../Texts/Center/16P_Bold/Text16P_B';

import LabelBreakerUserOrder from '../../separators/LabelBreakerUserOrder/LabelBreakerUserOrder';

function UserPageOCD(props: {
    children?: any,
    style: string,
    order: string,
    date: string,
    price: string,
    state: string,
    detail: string,
    delivery: string,
    tracking: string,
}){
    const currentStyle=props.style
    return (
        <div
            className = {currentStyle === "row" ? styles.row : styles.column}
        >
            <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                <Text16P_B text='N° de Compra' />
                <Text16P text={props.order} />
            </div>

            <LabelBreakerUserOrder style='horizontalBreaker'/>

            <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                <Text16P_B text='Fecha' />
                <Text16P text={props.date} />
            </div>

            <LabelBreakerUserOrder style='horizontalBreaker'/>

            <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                <Text16P_B text='Total' />
                <Text16P text={props.price} />
            </div>

            <LabelBreakerUserOrder style='horizontalBreaker'/>

            <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                <Text16P_B text='Estado' />
                {props.state == 'Confirmada' ? 
                    <Text16P_G text={props.state} /> :
                    <Text16P_R text={props.state} /> 
                }
            </div>

            <LabelBreakerUserOrder style='horizontalBreaker'/>

            <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                <Text16P_B text='Detalles' />
                {props.state == 'Confirmada' ? 
                    <Text16P text={props.detail} /> :
                    <Text16P text='-' />
                }
            </div>

            <LabelBreakerUserOrder style='horizontalBreaker'/>

            <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                <Text16P_B text='Correo' />
                {props.state == 'Confirmada' ? 
                    <Text16P text={props.delivery} /> :
                    <Text16P text='-' />
                }
            </div>

            <LabelBreakerUserOrder style='horizontalBreaker'/>

            <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                <Text16P_B text='Seguimiento' />
                {props.state == 'Confirmada' ? 
                    <Text16P text={props.tracking} /> :
                    <Text16P text='-' />
                }
            </div>
        </div>
    );
}

export default UserPageOCD;