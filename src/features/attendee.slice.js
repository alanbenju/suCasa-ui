import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import createAttendee from '../api/attendees'

export const createAttendeeThunk = createAsyncThunk('attendee/create', async (attendee) => {
    await createAttendee(attendee);
})

export const attendeeSlice = createSlice({
    name: 'attendee',
    initialState: {
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createAttendeeThunk.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(createAttendeeThunk.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })
            .addCase(createAttendeeThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = attendeeSlice.actions  


export default attendeeSlice.reducer