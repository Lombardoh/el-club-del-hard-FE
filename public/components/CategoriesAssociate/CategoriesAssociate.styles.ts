import {style} from 'typestyle';

const styles = {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    margin: '40px auto',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
  row: style({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    gap: '20px',
    margin: '20px auto',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
  select: style({
    width: '100%',
    height: '200px',
    borderRadius: '5px',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
  arrowContainer: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',
    $nest: {
      '@media (max-width: 700px)': {
      }
    }
  }),
}

export default styles;