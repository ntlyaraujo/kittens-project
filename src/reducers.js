import {
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTIES_PENDING,
    REQUEST_KITTIES_SUCCESS,
    REQUEST_KITTIES_FAILED,
} from './constants';

const initialStateSearch ={
    searchField: ''
}
export const searchKitties = (state=initialStateSearch,action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload};
        default:
            return state;
    }
}

const initialStateKitties ={
    isPending: false,
    kitties: [],
    error: '',
}
export const requestKitties = (state=initialStateKitties,action={}) => {
    switch(action.type){
        case REQUEST_KITTIES_PENDING:
            return { ...state, isPending: true};
        case REQUEST_KITTIES_SUCCESS:
            return { ...state, kitties: action.payload, isPending: false};
        case REQUEST_KITTIES_FAILED:
            return { ...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}