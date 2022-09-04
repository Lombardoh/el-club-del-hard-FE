import {style} from 'typestyle';

const styles = {
    searchBar: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "30px",
        background: "inherit",
        $nest:{
            '&:hover':{
                cursor: 'pointer',
            },
            '@media (max-width: 600px)':{
                width: '25px',
            }
        }
    }),
}

export default styles;