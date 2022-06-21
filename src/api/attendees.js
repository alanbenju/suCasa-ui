import axios from "axios";

const URL = process.env.API_URL  || 'http://localhost:3000/'

export default async function createAttendee(attendee){
    try{
        await axios.post(URL + 'attendees',attendee);
    }
    catch(err){
        throw Error(err.response.data.err)
    }
}

