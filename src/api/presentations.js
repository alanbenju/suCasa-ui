import axios from "axios";

const URL = process.env.API_URL  || 'http://54.172.132.243:3001/'

export async function createPresentation(presentation) {
    await axios.post(URL + 'presentations', presentation);
}

export async function fetchPresentations() {
    return (await axios.get(URL + 'presentations')).data;
}

export async function addAttendee(presentationId, attendeeEmail) {
    await axios.post(URL + 'presentations/' + presentationId + '/attendees', { email: attendeeEmail });
}