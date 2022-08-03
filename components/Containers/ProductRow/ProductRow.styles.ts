import {style} from 'typestyle';

const styles = {
    left: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px',
        marginTop: '50px',
        marginBottom: '50px',
        gap: '25px',
        width: '100%',
        height: '500px',
        backgroundColor: '#FFFFFF',
        $nest: {
            '@media (max-width: 768px)': {
                padding: '0px',
                gap: '0px',
                marginTop: '5px',
                height: '550px',
            }
        }
    }),
    center: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        gap: '10px',
        width: '100%',
        height: '710px',
        backgroundColor: '#FFFFFF',
        $nest: {
            '@media (max-width: 768px)': {
                padding: '0px',
                gap: '0px',
                marginTop: '5px',
            }
        }
    }),
    productRow: style({
        position: 'relative',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin:'auto',
        $nest: {
            '@media (max-width: 768px)': {
                padding: "10px",
                marginTop: "10px",
            },
            '@media (max-width: 360px)' : {
                width:'340px',
                padding:'0px'
            },
        }
    }),
    carousel: style({
        overflow: 'hidden',
        width: '1640px',
        paddingLeft: '30px',
        display:'flex', 
        flexDirection: 'row',
        margin: '0px 10px',
        gap: '20px',
        minHeight: '520px',
        $nest:{
            '@media (max-width: 1370px)' : {
                width:'1050px',
                gap: '15px',
                margin: '0px 30px',
                paddingLeft: '25px',
            },
            '@media (max-width: 768px)' : {
                width:'600px',
                gap:'10px',
            },
            '@media (max-width: 360px)' : {
                width:'330px',
                gap:'5px',
                paddingLeft: '15px',
                margin:'0px',
            },
        }
    }),
    inner: style({
        whiteSpace: 'nowrap',
    }),
    controls: style({
        display: 'flex',
        justifyContent: 'center',
    }),
}

export default styles;