import {
  GET_BUSINESS,
  GET_ENT,
  GET_SPORT,
  GET_HEALTH,
  GET_SCIENCE,
  GET_TECH
} from "../actions/types";

const initialState = {
  news: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BUSINESS:
      return {
        ...state,
        news: action.payload
      };
    case GET_SPORT:
      return {
        ...state,
        news: action.payload
      }

    case GET_ENT:
      return {
        ...state,
        news: action.payload
      };
    case GET_HEALTH:
      return {
        ...state,
        news: action.payload
      };
    case GET_SCIENCE:
      return {
        ...state,
        news: action.payload
      };
    case GET_TECH:
      return {
        ...state,
        news: action.payload
      };
    default:
      return state;
  }
}
