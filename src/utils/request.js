import axios from 'axios'
axios.defaults.baseURL = process.env.API_URL || 'http://localhost:4000';

export default async (params) => {
    try {
        const response = await axios(params)
        return response.data
    } catch (error) {
        throw error
    }
}
