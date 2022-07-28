import {style} from 'typestyle';

const styles = {
    delete: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        gap: "10px",
        height: "40px",
        background: "#BBDDF2",
        border: '0px',
        borderRadius: "4px",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    }),
    unavaible: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        gap: "10px",
        height: "40px",
        background: "#D1DEDE",
        border: '0px',
        borderRadius: "4px",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    })
}

export default styles;