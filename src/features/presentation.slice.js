import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addAttendee, createPresentation, fetchPresentations } from '../api/presentations';

export const createPresentationThunk = createAsyncThunk('presentation/create', async (presentation) => {
    await createPresentation(presentation);
})

export const fetchPresentationsThunk = createAsyncThunk('presentation/fetch', async () => {
    const response = await fetchPresentations();
    return response.result
})

export const AddAttendeeThunk = createAsyncThunk('presentation/addAttendee', async (data) => {
    await addAttendee(data.presentationId, data.email);
    
})

export const presentationSlice = createSlice({
    name: 'presentation',
    initialState: {
        createStatus: 'idle',
        fetchStatus: 'idle',
        addStatus: 'idle',
        error: null,
        presentations: []
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createPresentationThunk.pending, (state, action) => {
                state.createStatus = 'loading'
            })
            .addCase(createPresentationThunk.fulfilled, (state, action) => {
                state.createStatus = 'succeeded'
            })
            .addCase(createPresentationThunk.rejected, (state, action) => {
                state.createStatus = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchPresentationsThunk.pending, (state, action) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchPresentationsThunk.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded'
                state.presentations = action.payload
            })
            .addCase(fetchPresentationsThunk.rejected, (state, action) => {
                state.fetchStatus = 'failed'
                state.error = action.error.message
            })
            .addCase(AddAttendeeThunk.pending, (state, action) => {
                state.addStatus = 'loading'
            })
            .addCase(AddAttendeeThunk.fulfilled, (state, action) => {
                state.addStatus = 'succeeded'
            })
            .addCase(AddAttendeeThunk.rejected, (state, action) => {
                state.addStatus = 'failed'
                state.error = action.error.message
            })
    }
})

export default presentationSlice.reducer