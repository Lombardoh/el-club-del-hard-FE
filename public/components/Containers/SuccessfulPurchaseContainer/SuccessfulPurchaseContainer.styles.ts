import {style} from 'typestyle';

const styles = {
    container: style({
      padding: '5px 20% 0px 20%',
      color: 'white',
      minHeight: '300px',
      minWidth: '80%',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      $nest: {
        '@media (max-width: 768px)': {
            padding: '5px 5% 0px 5%',
      }}
    }),
    header: style({
        backgroundColor: '#64c574',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        width: '100%',
        $nest: {
            '@media (max-width: 768px)': {
                padding: '5px 5% 0px 5%',
                height: '120px',
                fontSize: '26px'
            }}
    }),
    body: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        position: 'absolute',
        color: '#c1c1c1',
        padding: '10px 10px',
        top: '90px',
        minHeight: '100px',
        $nest: {
            '@media (max-width: 768px)': {
                padding: '5px 5% 0px 5%',
                height: '120px',
                width: '85%',
                top: '115px'
            }}
    }),
}

export default styles;