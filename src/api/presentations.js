import axios from "axios";

const URL = process.env.API_URL || 'http://localhost:3000/'

export async function createPresentation(presentation) {
    await axios.post(URL + 'presentations', presentation);
}

export async function fetchPresentations() {
    return (await axios.get(URL + 'presentations')).data;
}

export async function addAttendee(presentationId, attendeeEmail) {
    await axios.post(URL + 'presentations/' + presentationId + '/attendees', { email: attendeeEmail });
}