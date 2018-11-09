import React, { Component } from 'react'
import '../../style/NewsGrid.scss'
import Grid from '../../layout/Grid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getNews } from '../../actions/newsActions'

class News extends Component {
  componentDidMount () {
    const { value } = this.props
    this.props.getNews(value)
  }
  render () {
    const { news, headline } = this.props
    return (
      <div className='container'>
        <div className='headline'>
          <h1> {headline} </h1> <p> The latest and best {headline} articles </p>
        </div>{' '}
        <div className='grid'>
          {' '}
          {news.map(el => <Grid key={el.title} el={el} />)}{' '}
        </div>{' '}
      </div>
    )
  }
}
News.propTypes = {
  news: PropTypes.array.isRequired,
  getNews: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  news: state.news.news
})

export default connect(mapStateToProps, {
  getNews
})(News)
