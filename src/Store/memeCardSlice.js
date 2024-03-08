import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { initalmemeApi, memeApi } from "../Api/memeApi"

// actions for api call 

export const fetchMemeCard = createAsyncThunk("memesfetchMemeCards", async (inpuData = "modi") => {
    try {
        const data = await memeApi(inpuData)
        return data
    } catch (error) {
        throw error
    }

});
export const fetchInitalMemeCard = createAsyncThunk("memesfetchInitialMemeCards", async () => {
    try {
        const data = await initalmemeApi()
        return data
    } catch (error) {
        throw error
    }

});

export const memeCardSlice = createSlice({
    name: "cards",
    initialState: {
        cardsData: [],
        loding: false,
        seterror: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMemeCard.fulfilled, (state, action) => {
                state.cardsData = action.payload,
                    state.loding = false,
                    state.seterror = null
            })
            .addCase(fetchMemeCard.pending, (state, action) => {
                state.loding = true
            })
            .addCase(fetchMemeCard.rejected, (state, action) => {
                state.seterror = action.meta.requestStatus,
                    state.loding = false
            })
            .addCase(fetchInitalMemeCard.fulfilled, (state, action) => {
                state.cardsData = action.payload,
                    state.loding = false

            })
            .addCase(fetchInitalMemeCard.pending, (state, action) => {
                state.loding = true

            })
            .addCase(fetchInitalMemeCard.rejected, (state, action) => {
                state.seterror = action.meta.requestStatus,
                    state.loding = false
            })

    }
})

export default memeCardSlice.reducer