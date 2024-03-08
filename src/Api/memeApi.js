import axios from "axios"
export const memeApi = async (inputData) => {
    try {
        const { data } = await axios.get(`https://meme-api.com/gimme/${inputData}/50`)
        return data
    } catch (error) {
        throw error
    }
}

export const initalmemeApi = async () => {
    try {
        const { data } = await axios.get(`https://meme-api.com/gimme/50`)
        return data
    } catch (error) {
        throw error
    }
}