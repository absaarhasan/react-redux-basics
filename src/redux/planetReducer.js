import {actionConstant} from './constants'


const planetInfo = (state = {}, action) => {
    switch (action.type) {
        case actionConstant.GET_API_PLANET_LIST_SUCCESS:

            return {
                    ...state,
                    planetList: action.planets || []
                }

        case actionConstant.GET_API_PLANET_DATA_SUCCESS:

            return {
                    ...state,
                    planetData: action.planetData || []
                }

        case actionConstant.GET_API_LOADING:

                return {
                    ...state,
                    loading: action.isLoading || false
                    }

        case actionConstant.GET_API_ERROR:

                return {
                    ...state,
                    loading: action.hasErrored || false
                }

        case actionConstant.CLEAR_PLANET_DATA:

                return {
                    ...state,
                    planetData: []
                }

        default:
            return state;
    }
}

export default planetInfo