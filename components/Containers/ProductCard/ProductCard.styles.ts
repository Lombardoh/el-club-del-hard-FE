import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',   
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        gap: '30px',
        width: '300px',
        height: '500px',
        backgroundColor: '#FFFFF',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        borderRadius: '8px',
        $nest: {
            '@media (max-width: 1370px)': {
                width: '240px',
                height: '520px',
            },
            '@media (max-width: 768px)': {
                width: '180px',
                height: '500px',
            },
            '@media (max-width: 360px)' : {
                width:'150px',
            },
        }
    }),
    nameMC: style({
        height:'70px',
        display:'flex',
        justifyContent:'center',
        $nest: {
            '@media (max-width: 400px)' : {
                height:'60px',
            },
        }
    }),
}

export default styles;