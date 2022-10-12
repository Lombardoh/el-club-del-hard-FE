import {style} from 'typestyle';

const styles = {
  container: style({
    display:'flex', 
    width: '50%',
    margin: 'auto auto',
    flexDirection:'column', 
    justifyContent:'center', 
    alignItems:'left',
    marginBottom: '5rem',
    gap: '5px'
  }),
  emailSent: style({
    display:'flex', 
    width: '50%',
    minHeight: '18vh',
    margin: 'auto auto',
    justifyContent:'center', 
    alignItems:'center',
  })
}

export default styles;