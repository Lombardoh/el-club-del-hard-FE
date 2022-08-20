import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 50px',
        width: '100%',
        height: '170px',
        backgroundColor: '#FFFFFF',
        $nest: {
            '@media screen and (max-width: 500px)': {
                padding: '10px 10px',
                height: '80px',
            },
        },
    }),
    rightContainer: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        $nest: {
            '@media screen and (max-width: 500px)': {
                padding: '10px 10px',
                height: '80px',
                justifyContent: 'right',
            },
        },
    }),
    logoContainer: style({
        display: 'flex',
        width: '150px',
        height: '150px',
        position: 'relative',
        $nest: {
            '@media screen and (max-width: 768px)': {
                width: '100px',
                height: '100px',
            },
        },
    }),
    logo: style({
        objectFit: 'cover',
        position: 'absolute',
        $nest: {
            '@media screen and (max-width: 500px)': {
                minWidth: '60px !important',
                minHeight: '60px !important',
            },
        },
    }),
    searchBar: style({
        display: "flex", 
        gap:"50px", 
        alignItems:"center",
        $nest: {
            '@media screen and (max-width: 500px)': {
                
            },
        },
    }),
    hamburgerMenu: style({
        display: "none",
        $nest: {
            '@media (max-width: 500px)': {
                display: "flex",
            },
        },
    }),
    rightMenu: style({
        display: "flex", 
        gap:"50px",
        $nest: {
            '@media only screen and (max-width: 500px)': {
                display: 'none',
            },
        },
    }),
}

export default styles;