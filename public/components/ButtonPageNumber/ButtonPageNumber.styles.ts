import {style} from 'typestyle';

const styles = {
    current: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        width: "40px",
        height: "40px",
        background: "#63A8D4",
        borderRadius: "50px",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    }),
    other: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        width: "40px",
        height: "40px",
        background: "#414141",
        borderRadius: "50px",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    }),
    final: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        width: "35px",
        height: "40px",
        background: "#414141",
        borderRadius: "8px",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;