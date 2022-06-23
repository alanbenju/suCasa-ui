import axios from "axios";

const URL = process.env.API_URL  || 'http://3.87.62.167/' 

export default async function createAttendee(attendee){
    try{
        await axios.post(URL + 'attendees',attendee);
    }
    catch(err){
        throw Error(err.response.data.err)
    }
}

