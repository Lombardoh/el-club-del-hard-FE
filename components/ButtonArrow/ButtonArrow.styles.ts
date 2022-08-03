import {style} from 'typestyle';

const styles = {
    right: style({
        $nest: {
            '@media (max-width: 768px)': {
                position: 'absolute',
                top: '540px',
                marginLeft: "300px",
            },
            '@media (max-width: 360px)' : {
                marginLeft: "100px",
            },
        }
    }),
    buttonArrow: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        width: "40px",
        height: "60px",
        background: "#63A8D4",
        borderRadius: "15px",
        color:"white",
        $nest:{
            '@media (max-width: 768px)':{
                position: 'absolute',
                top: '540px',
                left: '160px',
                width: "40px",
                height: "30px",
            },
            '&:hover':{
                cursor: 'pointer'
            },
            '@media (max-width: 360px)' : {
                left: "87px",
            },
        }
    }),
    buttonAddSub: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        width: "30px",
        height: "40px",
        background: "#9E9E9E",
        borderRadius: "50px",
        color:"white",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            },
        }
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;