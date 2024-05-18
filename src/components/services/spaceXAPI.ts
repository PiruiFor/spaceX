
import {type Doc, type APISpace} from "../../types/api"

export const getSpaceLaunchesBy = async ({id}: {id: string}) => {

    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const launch = (await res.json()) as Doc

    return launch
}

export const getSpaceLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 12,
            }
        })
    });

    const { docs: launches } = await res.json() as APISpace;
    return launches;
};

export const getLaunchesOldest = async () => {

    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
    
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'desc'
                },
                limit: 12,
            }
        })
        
    })

    const {docs: launches} = await res.json() as APISpace
    return launches
}



