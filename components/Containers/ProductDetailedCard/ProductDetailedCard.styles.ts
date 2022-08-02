import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25px',
        gap: '100px',
        width: '270px',
        
        $nest: {
                                            //de 0px -> 359px (default)
            '@media (min-width: 360px)': {  //de 359px -> 549px
                backgroundColor:'red',
                width: '300px',
            },
            '@media (min-width: 550px)': {  //de 550px -> 767px
                backgroundColor:'blue',
                width: '460px',
            },
            '@media (min-width: 768px)': {  //de 768px -> 1199px
                backgroundColor:'yellow',
                width: '640px',
            },
            '@media (min-width: 1200px)': { //de 1200px -> 1919px
                backgroundColor:'green',
                width: '1000px',
            },
            '@media (min-width: 1600px)': { //de 1200px -> 1919px
                backgroundColor:'green',
                width: '1330px',
            },
            '@media (min-width: 1920px)': { //de 1920px -> 
                backgroundColor:'purple',
                width: '1600px',
            },
        }
    }),
    priceMC: style({
        display:'flex',
        flexDirection:'row',
        gap:'50px',
        justifyContent:'center',
        alignItems:'center',
    }),
    priceSC: style({
        display:'flex',
        flexDirection:'row',
        gap:'20px',
        justifyContent:'center',
        alignItems:'center',
    }),
    buttonsMC: style({
        display:'flex',
        flexDirection:'row',
        gap:'50px',
        padding:'0px 100px',
        alignItems:'center',
    }),
}

export default styles;