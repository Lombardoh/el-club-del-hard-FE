import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25px',
        gap: '100px',
        width: '1600px',
        $nest:{
            '@media (max-width: 400px)' : {
                flexDirection: 'column',
                width: '90%',
            },
        }
    }),
    cartButtons: style({
        display:'flex',
        flexDirection:'row',
        gap:'50px',
        padding:'0px 100px',
        $nest: {
            '@media (max-width: 400px)' : {
                gap:'0px',
                padding:'0px 0px',
            },
        }
    }),
    productText: style({
        padding:'25px 100px',
        $nest: {
            '@media (max-width: 400px)' : {
                padding:'0px 0px',
            },
        }
    })
}

export default styles;