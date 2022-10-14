import {style} from 'typestyle';

const styles = {
  container: style({
    width: '20%',
    border: '1px solid black',
    borderRadius: '5px',
    height: '100%',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
  title: style({
    width: '100%',
    background: '#49679E',
    padding: '10px',
    color: 'white',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
  description: style({
    width: '100%',
    background: '#6181BC',
    padding: '10px',
    color: 'white',
    height: '100%',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
}

export default styles;