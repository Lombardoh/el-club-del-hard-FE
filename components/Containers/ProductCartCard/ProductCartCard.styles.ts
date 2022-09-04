import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 10px 10px 20px',
        gap: '10px',
        width: '100%',
        border: '3px solid #63A8D4',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        borderRadius: '8px',
        $nest: {
            '@media (max-width: 600px)': {
                flexDirection:'column',
            },
            '@media (max-width: 500px)': {
                paddingTop:'20px'
            }
        }
    }),
    buttonArea: style({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'300px',
        $nest: {
            '@media (max-width: 1400px)': {
                width:'200px',
            }
        }
    }),
    priceArea: style({
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        $nest: {
            '@media (max-width: 800px)': {
                flexDirection:'column'
            },
            '@media (max-width: 600px)': {
                gap:'10px',
                paddingBottom:'10px'
            }
        }
    }),
    itemName: style({
        width:'60%',
        display:'flex',
        justifyContent:'flex-start',
        $nest: {
            '@media (max-width: 600px)': {
                width:'80%',
                justifyContent:'center',
            },
            '@media (max-width: 500px)': {
                width:'85%',
                justifyContent:'center',
            }
        }
    })
}

export default styles;