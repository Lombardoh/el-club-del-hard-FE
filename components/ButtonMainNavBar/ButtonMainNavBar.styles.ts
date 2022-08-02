import {style} from 'typestyle';

const styles = {
    mainNavBarButton: style({
        display: "none",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            },
                                            //de 0px -> 359px (default)
            '@media (min-width: 768px)': {  //de 768px -> 1099px
                backgroundColor:'red',
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                width: "200px",
                height: "60px",
            },
            '@media (min-width: 1000px)': { //de 1100px -> 1920px
                backgroundColor:'green',
                display: "flex",
            },
        }
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;