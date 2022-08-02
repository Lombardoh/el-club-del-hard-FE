import styles from './NavBar.styles';
import ButtonMainNavBar from '../../ButtonMainNavBar/ButtonMainNavBar';
function NavBar(props: {}){

    return (
        <div
            className = {styles.container}
        >
            <ButtonMainNavBar 
                text={"Categorias"} 
                disabled={false} 
                style={"buttonMainNavBar"}
                onClick={Function} />
            <ButtonMainNavBar 
                text={"Mi cuenta"} 
                disabled={false} 
                style={"buttonMainNavBar"}
                onClick={Function} />
            <ButtonMainNavBar 
                text={"Help"} 
                disabled={false} 
                style={"buttonMainNavBar"}
                onClick={Function} />
        </div>
    );
}

export default NavBar;