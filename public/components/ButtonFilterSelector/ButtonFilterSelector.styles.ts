import {style} from 'typestyle';

const styles = {
    selected: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px 0px",
        gap: "10px",
        width: "60px",
        height: "60px",
        color: '#63A8D4',
        background: "inherit",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    }),
    notSelected: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px 0px",
        gap: "10px",
        width: "60px",
        height: "60px",
        color: '#414141',
        background: "inherit",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    })
}

export default styles;