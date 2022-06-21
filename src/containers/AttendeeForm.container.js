import { AttendeeFormComponent } from "../components/AttendeeForm.component";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { createAttendeeThunk } from "../features/attendee.slice";


export function AttendeeFormContainer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')

    const onNameChanged = (e) => { setName(e.target.value) }
    const onEmailChanged = (e) => setEmail(e.target.value)
    const onCompanyChanged = (e) => setCompany(e.target.value)

    const dispatch = useDispatch()
    const { status, error } = useSelector(state => state.attendee) //TODO: Use the status correctly... spinners.. alerts.. etc

    const onCreateAttendee = async (e) => {
        e.preventDefault()
        const attendee = {
            name, email, company
        }
        dispatch(
            createAttendeeThunk(attendee)
        )
    }

    const componentProps = {
        name, email, company, onNameChanged, onEmailChanged, onCompanyChanged, onCreateAttendee
    }
    return (
        <>
            <AttendeeFormComponent {...componentProps}></AttendeeFormComponent>
            <p>Request status: {status}</p> {error}
        </>
    )
}