import React, {useEffect, useState} from 'react'

import { fetchSessions } from '../apis/api'

function Sessions () {

    const [sessions, setSessions] = useState(null)

    useEffect(() => {
        fetchSessions()
        .then(sessions => setSessions(sessions))
        return null
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Awesome! We'll see you there!`)
      }


    return (
        <> 

        <h3>Group therapy sessions & workshops</h3>

        <ul>
        { sessions ? sessions.map(sesh => {
        return <li key={sesh.id}>
            <b>session: </b><em>{sesh.title + ' // ' + sesh.info}</em>
            <p>{sesh.date} {sesh.time} in {sesh.location}</p>
            <p>ran by: {sesh.ran_by}</p>
            <button onClick={handleSubmit}>i'm keen!</button>
            <br></br>
            <br></br>
            </li>
        })
        : null}
        </ul>
          
        </>

    )
}

export default Sessions