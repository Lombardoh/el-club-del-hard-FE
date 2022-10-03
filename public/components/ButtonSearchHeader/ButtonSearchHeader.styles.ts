import {style} from 'typestyle';

const styles = {
    container: style({
        position: 'relative',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column'
    }),
    searchIcon: style({
        marginTop: '20px',
        marginLeft: '1rem'
    }),
    searchBar: style({
        display: 'flex',  
        width: '800px',
        $nest: {
          '@media (max-width: 768px)': {
            position: 'absolute',
            width: '350px',
            top: '40px',
            left: '-105px'
          },
        }
    }),
    searchContainer: style({
        position: 'relative',
    }),
    searchDropBox: style({
        display: 'flex',
        position: 'absolute',
        width: '100%',
        flexDirection: 'column',
        border: '1px solid black',
        borderTop: 'none',
        zIndex: '10',
        backgroundColor: 'white',
        $nest: {
          '@media (max-width: 768px)': {
            position: 'absolute',
            width: '350px',
            top: '60px',
            left: '-105px'
          },
        }
    }),
}

export default styles;