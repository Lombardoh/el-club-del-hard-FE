import styles from './UserPageOCD.styles';
import Text16P from '../../Texts/Center/16P/Text16P';
import Div_UserOrder from '../GenericContainers/Div_UserOrder/Div_UserOrder';

import Text16P_G from '../../Texts/Center/16P_Green/Text16P_G';
import Text16P_R from '../../Texts/Center/16P_Red/Text16P_R';

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
            <Div_UserOrder style='row'>
                <Text16P text={props.order} />
            </Div_UserOrder>
            <Div_UserOrder style='row'>
                <Text16P text={props.date} />
            </Div_UserOrder>
            <Div_UserOrder style='row'>
                <Text16P text={props.price} />
            </Div_UserOrder>
            <Div_UserOrder style='row'>
                {props.state == 'Confirmada' ? 
                    <Text16P_G text={props.state} /> :
                    <Text16P_R text={props.state} /> 
                }
            </Div_UserOrder>
            <Div_UserOrder style='row'>
                {props.state == 'Confirmada' ? 
                    <Text16P text={props.detail} /> :
                    <Text16P text='-' />
                }
            </Div_UserOrder>
            <Div_UserOrder style='row'>
                {props.state == 'Confirmada' ? 
                    <Text16P text={props.delivery} /> :
                    <Text16P text='-' />
                }
            </Div_UserOrder>
            <Div_UserOrder style='row'>
                {props.state == 'Confirmada' ? 
                    <Text16P text={props.tracking} /> :
                    <Text16P text='-' />
                }
            </Div_UserOrder>
        </div>
    );
}

export default UserPageOCD;