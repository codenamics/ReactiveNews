import { GET_NEWS, SEARCH_NEWS } from "./types"
import axios from "axios"

export const getNews = news => dispatch => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${news}&apiKey=5dba100e14914809983c32d8f26c3740`
    )
    .then(res =>
      dispatch({
        type: GET_NEWS,
        payload: res.data.articles,
      })
    )
}
export const searchNews = (news, history) => dispatch => {
  axios
    .get(
      `https://newsapi.org/v2/everything?q=${news}&sortBy=publishedAt&apiKey=5dba100e14914809983c32d8f26c3740`
    )
    .then(res =>
      dispatch({
        type: SEARCH_NEWS,
        payload: res.data.articles,
      })
    )
    .then(res => history.push("/search"))
}
