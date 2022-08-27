import {style} from 'typestyle';

const styles = {
    container: style({
        $nest:{
            '@media (max-width: 768px)' : {
                position: 'sticky',
                top: 0,
                zIndex: 10,
            },
        }        
    })
}

export default styles;