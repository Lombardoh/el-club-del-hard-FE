import {style} from 'typestyle';

const styles = {
    horizontalBreaker: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",        
        margin: "50px auto 30px auto", 
        width: "70%",
        height: "5px",
        background: "#63A8D4",
        borderRadius: "8px",
        $nest: {
            '@media (max-width: 768px)': {
                width: "60%",
                margin: "30px auto 50px auto", 
            },
            '@media (max-width: 360px)' : {
                width: "60%",
                margin: "40px auto 30px auto", 
            },
        }
    }),
    verticalBreaker: style({
        margin: "20px",
        gap: "0px",

        width: "7px",
        height: "250px",

        background: "#63A8D4",
        borderRadius: "8px",
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;