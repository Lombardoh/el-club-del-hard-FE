import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '30px',
        gap: '40px',
        width: '100%',
        $nest:{
                                            //de 0px -> 768px (default)
            '@media (min-width: 800px)': {  //de 768px -> 1099px
                width: '626.67px',
                // aca necesita font size ~28/30px y ~16/18px
            },
            '@media (min-width: 1200px)': { //de 1100px -> 1920px
                // aca necesita font size 36px y 24px
            },
        }
    }),
    
}

export default styles;