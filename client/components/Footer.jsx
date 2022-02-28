import React, {useEffect, useState} from 'react'
import Image from 'react-bootstrap/Image'

function Footer () {

    const sendUp = () => {
        window.scrollTo(0, 0)
    }

    return (
        <> 

        <footer onClick={sendUp}>
        <Image src='./images/back-to-top-icon.png' title='return to top' fluid='true' className='arrow' />
        </footer> 
          
        </>
    )
}

export default Footer