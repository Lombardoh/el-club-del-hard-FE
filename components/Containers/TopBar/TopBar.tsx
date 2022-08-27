import NavBar from '../NavBar/NavBar'
import HeaderTop from '../HeaderTop/HeaderTop'
import React, {useState} from 'react'
import styles from './TopBar.styles'

function TopBar(){
    const [open, setOpen] = useState(false)

    const handleClick = (event) => {
        setOpen(!open)
    }
    return (
        <div className={styles.container}>
        <HeaderTop onClick={handleClick}/>
        <NavBar open={open}/>
        </div>
    );
}

export default TopBar;