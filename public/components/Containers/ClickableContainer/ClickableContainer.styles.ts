import {style} from 'typestyle';

const styles = {
    column: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    }),
    row: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    })
}

export default styles;