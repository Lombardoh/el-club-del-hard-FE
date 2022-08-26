import {style} from 'typestyle';

const styles = {
    searchBar: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px 0px",
        gap: "10px",
        width: "30px",
        height: "30px",
        background: "inherit",
        $nest:{
            '&:hover':{
                cursor: 'pointer',
            },
            '@media (max-width: 600px)':{
                width: '25px',
                marginRight: '20px',
            }
        }
    }),
}

export default styles;