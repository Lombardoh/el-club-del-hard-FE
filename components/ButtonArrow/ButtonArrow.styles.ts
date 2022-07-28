import {style} from 'typestyle';

const styles = {
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
        borderRadius: "50px",
        color:"white",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
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