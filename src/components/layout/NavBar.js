import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.scss"
import { searchNews } from "../../actions/newsActions"
import { connect } from "react-redux"
import { withRouter } from "react-router"
class NavBar extends Component {
  state = {
    input: "",
  }

  valueInput = e => {
    this.setState({
      input: e.target.value,
    })
  }
  searchInput = () => {
    const { input } = this.state
    this.props.searchNews(input, this.props.history)
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container flex-nav">
          <a href="/" className="navbar-brand">
            <i className="fab fa-accusoft" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/business" className="nav-link">
                  Business{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link to="/espn" className="nav-link">
                  Sports{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link to="/entertainment" className="nav-link">
                  Entertainment{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link to="/health" className="nav-link">
                  Health{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link to="/science" className="nav-link">
                  Science{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link to="/tech" className="nav-link">
                  Tech{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <form className="input-box">
                  <input type="text" onChange={this.valueInput} />
                  <i className="fas fa-search" onClick={this.searchInput} />
                </form>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </nav>
    )
  }
}

export default withRouter(
  connect(
    null,
    { searchNews }
  )(NavBar)
)
