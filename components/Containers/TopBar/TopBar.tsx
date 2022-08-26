import NavBar from '../NavBar/NavBar'
import HeaderTop from '../HeaderTop/HeaderTop'
import React, {useState} from 'react'

function TopBar(){
    const [open, setOpen] = useState(false)

    const handleClick = (event) => {
        setOpen(!open)
        console.log(event.target, open)
    }
    return (
        <>
        <HeaderTop onClick={handleClick}/>
        <NavBar open={open}/>
        </>
    );
}

export default TopBar;