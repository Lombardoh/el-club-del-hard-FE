import {style} from 'typestyle';

const styles = {
  container: style({
    width: '80%',
    margin: '40px auto',
    display: 'flex',
    justifyContent: 'space-around',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
}

export default styles;