import {style} from 'typestyle';

const styles = {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    margin: 'auto auto',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
  row: style({
    display: 'flex',
    width: '100%',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
  select: style({
    overflow: 'auto',
    height: '100px',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
}

export default styles;