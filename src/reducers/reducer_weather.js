import * as Action from '../actions/';

export default function ReducerWeather(state = [], action){

    switch(action.type){
        case Action.FETCH_WEATHER :
            if( !action.payload.data ){
                return state;
            }
            return [action.payload.data, ...state];

    }

    return state;
    
}