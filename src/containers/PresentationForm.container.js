import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { createPresentationThunk, fetchPresentationsThunk } from "../features/presentation.slice";
import { PresentationFormComponent } from "../components/PresentationForm.component";


export function PresentationFormContainer() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState(1)
    const [details, setDetails] = useState('')
    const [speaker, setSpeaker] = useState({
        name: '',
        email: '',
        company: '',
        bio: ''
    })


    const onNameChanged = (e) => { setName(e.target.value) }
    const onRoomChanged = (e) => setRoom(e.target.value)
    const onDetailsChanged = (e) => setDetails(e.target.value)
    const onSpeakerNameChanged = (e) => setSpeaker({
        ...speaker,
        name: e.target.value
    })
    const onSpeakerEmailChanged = (e) => setSpeaker({
        ...speaker,
        email: e.target.value
    })
    const onSpeakerCompanyChanged = (e) => setSpeaker({
        ...speaker,
        company: e.target.value
    })
    const onSpeakerBioChanged = (e) => setSpeaker({
        ...speaker,
        bio: e.target.value
    })

    const dispatch = useDispatch()
    const { createStatus: status } = useSelector(state => state.presentation) //TODO: Use the status correctly... spinners.. alerts.. etc

    const onCreatePresentation = async (e) => {
        e.preventDefault()
        const presentation = {
            presentation: name,
            room,
            details,
            speaker
        }
        dispatch(createPresentationThunk(presentation)).then(() => dispatch(fetchPresentationsThunk()))
    }

    const componentProps = {
        name, room, details, speaker, onNameChanged, onRoomChanged, onDetailsChanged, onSpeakerNameChanged, onSpeakerEmailChanged,
        onSpeakerCompanyChanged,
        onSpeakerBioChanged,
        onCreatePresentation
    }

    return (
        <>
            <PresentationFormComponent {...componentProps}></PresentationFormComponent>
            <p>Request status: {status}</p>
        </>
    )
}