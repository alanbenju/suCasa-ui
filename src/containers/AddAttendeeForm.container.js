import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { AddAttendeeThunk, fetchPresentationsThunk } from "../features/presentation.slice";
import { AddAttendeeFormComponent } from "../components/AddAttendeeForm.component";


export function AddAttendeeFormContainer() {
    const [email, setEmail] = useState('')
    const [presentationId, setPresentation] = useState({})

    const onEmailChanged = (e) => setEmail(e.target.value)
    const onPresentationChange = (e) => {
        setPresentation(e.toString())}

    const dispatch = useDispatch()
    const { fetchStatus, addStatus, presentations } = useSelector(state => state.presentation) //TODO: Use the status correctly... spinners.. alerts.. etc

    const onAddAttendee = async (e) => {
        e.preventDefault()
        dispatch(AddAttendeeThunk({presentationId, email}))
    }

    const dropdownTitle = "Select presentation"
    const componentProps = {
        email, onEmailChanged, onAddAttendee, presentations, onPresentationChange, dropdownTitle
    }

    useEffect(() => {
        dispatch(fetchPresentationsThunk())
    }, [dispatch])

    return (
        <>
            <AddAttendeeFormComponent {...componentProps}></AddAttendeeFormComponent>
            <p>Fetch request status: {fetchStatus}</p>
            <p>Add attendee request status: {addStatus}</p>
        </>
    )
}