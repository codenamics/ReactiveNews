import React, { Component } from "react"
import "../layout/NewsGrid.scss"
import Grid from "../layout/Grid"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getEnt } from "../../actions/newsActions"
class Entertainment extends Component {
  componentDidMount() {
    this.props.getEnt()
  }
  render() {
    const { news } = this.props
    return (
      <div className="container">
        <div className="headline">
          <h1> Entertainment </h1>{" "}
          <p> The latest and best entertainment articles </p>{" "}
        </div>{" "}
        <div className="grid">
          {" "}
          {news.map(el => (
            <Grid key={el.title} el={el} />
          ))}{" "}
        </div>{" "}
      </div>
    )
  }
}
Entertainment.propTypes = {
  news: PropTypes.array.isRequired,
  getEnt: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  news: state.news.news,
})

export default connect(
  mapStateToProps,
  {
    getEnt,
  }
)(Entertainment)
