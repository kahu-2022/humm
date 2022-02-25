import React, {useEffect, useState} from 'react'

const arrow = {
    // cursor: pointer,
    // color: 'blue',
    // align: 'right',
  };


function Footer () {

    const sendUp = () => {
        window.scrollTo(0, 0)
    }


    return (
        <> 

        <footer style={arrow} onClick={sendUp}> ^ <p>return to top of page</p>
        </footer> 
          
        </>
    )
}

export default Footer