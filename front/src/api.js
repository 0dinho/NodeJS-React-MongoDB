import axios from "axios"

const URL = "http://localhost:8000"

export async function getAllAthletes() {
    const response = await axios.get(`${URL}/athletes`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}

export async function getAthlete(id) {
    const response = await axios.get(`${URL}/athletes/${id}`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}

export async function createAthlete(athleteObject) {
    const response = await axios.post(`${URL}/athletes`, athleteObject)

    return response
}

export async function updateAthlete(id, athleteObject) {
    const response = await axios.put(`${URL}/athletes/${id}`, athleteObject)

    return response
}

export async function deleteAthlete(id) {
    const response = await axios.delete(`${URL}/athletes/${id}`)

    return response
}