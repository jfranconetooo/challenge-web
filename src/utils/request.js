import axios from 'axios'
axios.defaults.baseURL = process.env.API_URL || 'https://github-challenge.herokuapp.com/api';

export default async (params) => {
    try {
        const response = await axios(params)
        return response.data
    } catch (error) {
        throw error
    }
}
