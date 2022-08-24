import {style} from 'typestyle';


const styles = {
    left: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        width: "200px",
        height: "40px",
        background: 'rgba(99, 168, 212, 0.7)',
        borderRadius: "50px 0px 0px 50px",

        $nest:{
            '&:hover':{
                cursor: 'pointer',
                background: "#6181BC",
            },
        }
    }),
    right: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        width: "200px",
        height: "40px",
        background: 'rgba(99, 168, 212, 0.7)',
        borderRadius: "0px 50px 50px 0px",

        $nest:{
            '&:hover':{
                cursor: 'pointer',
                background: "#6181BC",
            },
        }
    }),
    link: style({
        $nest: {
            '@media screen and (max-width: 600px)': {
                width: '100%',
            }
        }
    }),
    text: style({
        display: "block",
        textAlign:'center',
        fontSize: "24px",
        fontFamily: '',
        fontWeight: "400",
        color: "#FFFFFF",
        width:'200px',
        height:'40px'
    }),
}

export default styles;