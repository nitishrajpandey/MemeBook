import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { initalmemeApi, memeApi } from "../Api/memeApi"

// actions for api call 

export const fetchMemeCard = createAsyncThunk("memesfetchMemeCards", async (inpuData = "modi") => {
    const data = await memeApi(inpuData)
    return data
});
export const fetchInitalMemeCard = createAsyncThunk("memesfetchInitialMemeCards", async () => {
    const data = await initalmemeApi()
    return data
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
        builder.addCase(fetchMemeCard.fulfilled, (state, action) => {
            state.cardsData = action.payload,
                state.loding = false,
                state.seterror = null

        })
            .addCase(fetchMemeCard.pending, (state, action) => {
                state.loding = true,
                    state.seterror = null

            })
            .addCase(fetchMemeCard.rejected, (state, action) => {
                state.seterror = action.error.message,
                    state.loding = false
            })
            .addCase(fetchInitalMemeCard.fulfilled, (state, action) => {
                state.cardsData = action.payload,
                    state.loding = false,
                    state.seterror = null
            })
            .addCase(fetchInitalMemeCard.pending, (state, action) => {
                state.loding = true,
                    state.seterror = null

            })
            .addCase(fetchInitalMemeCard.rejected, (state, action) => {
                state.seterror = action.error.message,
                    state.loding = false
            })

    }
})

export default memeCardSlice.reducer