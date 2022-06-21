import { configureStore } from '@reduxjs/toolkit'
import attendeeReducer from './features/attendee.slice'
import presentationReducer from './features/presentation.slice'

export default configureStore({
  reducer: {
    attendee: attendeeReducer,
    presentation: presentationReducer
  }
})