import {
  GET_BUSINESS,
  GET_ENT,
  GET_SPORT,
  GET_HEALTH,
  GET_SCIENCE,
  GET_TECH
} from "./types"
import axios from "axios"

export const getBusiness = () => dispatch => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5dba100e14914809983c32d8f26c3740"
    )
    .then(res =>
      dispatch({
        type: GET_BUSINESS,
        payload: res.data.articles,
      })
    )
}

export const getEnt = () => dispatch => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=5dba100e14914809983c32d8f26c3740"
    )
    .then(res =>
      dispatch({
        type: GET_ENT,
        payload: res.data.articles,
      })
    )
}
export const getSport = () => dispatch => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?sources=espn&apiKey=5dba100e14914809983c32d8f26c3740"
    )
    .then(res =>
      dispatch({
        type: GET_SPORT,
        payload: res.data.articles,
      })
    )
}
export const getHealth = () => dispatch => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=5dba100e14914809983c32d8f26c3740"
    )
    .then(res =>
      dispatch({
        type: GET_HEALTH,
        payload: res.data.articles,
      })
    )
}
export const getScience = () => dispatch => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=5dba100e14914809983c32d8f26c3740"
    )
    .then(res =>
      dispatch({
        type: GET_SCIENCE,
        payload: res.data.articles,
      })
    )
}
export const getTech = () => dispatch => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5dba100e14914809983c32d8f26c3740"
    )
    .then(res =>
      dispatch({
        type: GET_TECH,
        payload: res.data.articles,
      })
    )
}
