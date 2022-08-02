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
        gap: '10px',
        width: '100%',
        height: '500px',
        backgroundColor: '#FFFFFF',
        $nest: {
            '@media (max-width: 768px)': {
                padding: '0px',
                gap: '0px',
                marginTop: '5px',
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
        $nest: {
            '@media (max-width: 768px)': {
                padding: "10px",
                marginTop: "10px",
            }
        }
    }),
    carousel: style({
        overflow: 'hidden',
        width: '1350px',
        paddingLeft: '65px',
        display:'flex', 
        flexDirection: 'row',
        marginLeft: '60px',
        gap: '20px',
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