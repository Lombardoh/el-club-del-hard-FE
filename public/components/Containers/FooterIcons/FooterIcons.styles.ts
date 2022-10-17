import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '30px',
        gap: '40px',
        backgroundColor: '#636DD4',
        width: '100%',
        $nest:{
            '@media (min-width: 900px)': { 
                width: '626.67px',
            },
        }
    })
}

export default styles;