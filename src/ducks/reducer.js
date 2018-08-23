const initialState = {
    carInfo: [],
}

const GET_CARINFO = 'GET_CARINFO'

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_CARINFO:
            return {...state, carInfo: action.payload}

        default: return state
    }
}

export function setCarInfo(info) {
    console.log(info)
    return {
        type: GET_CARINFO,
        payload: info
    }
}