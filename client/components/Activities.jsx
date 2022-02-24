import React, {useEffect, useState} from 'react'

import { fetchActivities } from '../apis/api'

function Activities () {

    const [activities, setActivities] = useState(null)

    useEffect(() => {
        fetchActivities()
        .then(activities => setActivities(activities))
        return null
    },[])

    return (
        <> 

        <h3>Community Events/Activities</h3>

        <ul>
        { activities ? activities.map(act => {
        return <li key={act.id}>
            <b>Activity: </b><em>{act.title + ' // ' + act.info}</em>
            <p>{act.date} {act.time} in {act.location}</p>
            <p>ran by: {act.ran_by}</p>
            {/* <button <Link to='/'>
      <Home />
      </Link> >i'm keen!</button> */}
            <br></br>
            <br></br>
            </li>
        })
        : null}
        </ul>
          
        </>

    )
}

export default Activities