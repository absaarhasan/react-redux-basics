
import {actionConstant, apiConstant} from './constants'

const getApiError = (bool) => {
    return {
        type: actionConstant.GET_API_ERROR,
        hasErrored: bool
    };
}

const getApiLoading = (bool) => {
    return {
        type: actionConstant.GET_API_LOADING,
        isLoading: bool
    };
}
const getPlanetListSuccess = (response) => {

    const planets = response.results.map(planetObj => {
        return {name : planetObj.name , url : planetObj.url }
    });

    return {
        type: actionConstant.GET_API_PLANET_LIST_SUCCESS,
        planets
    };
}

const getPlanetDataSuccess = (response) => {

    const dataKeys = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population']

    const planetData = dataKeys.map(key => {
        return { key : key , value : response[key]}
    });

    return {
        type: actionConstant.GET_API_PLANET_DATA_SUCCESS,
        planetData
    };

}

export const  getPlanetList = () => {
    return (dispatch) => {
        dispatch(getApiLoading(true));
        fetch(apiConstant.PLANETS_API)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(getApiLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                dispatch(getPlanetListSuccess(response))
            })
            .catch(() => dispatch(getApiError(true)));
    };
}

export const  getPlanetData = (url) => {

    return (dispatch) => {
        dispatch(getApiLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(getApiLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                dispatch(getPlanetDataSuccess(response))
            })
            .catch((err) => {
                dispatch(getApiError(true))
            });
    };
}

export const clearPlanetData = () => {
    return {
        type: actionConstant.CLEAR_PLANET_DATA
    };
}


