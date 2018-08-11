import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import DatePicker from "react-datepicker"
import { searchNews } from "../../actions/newsActions"

import "react-datepicker/src/stylesheets/datepicker.scss"
class SearchModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      date: "",
    }
  }
  valueInput = e => {
    this.setState({
      input: e.target.value,
    })
  }
  handleChange = date => {
    const valueOfInput = date.format("YYYY-MM-DD")
    this.setState({
      date: valueOfInput,
    })
  }
  searchInput = () => {
    const { input, date } = this.state
    this.props.searchNews(input, date)
    console.log(this.state.date, this.state.input)
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <form className="input-box form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search "
                    onChange={this.valueInput}
                  />
                  <DatePicker
                    className="form-control"
                    dateFormat="YYYY/MM/DD"
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                  />
                  <Link to="/results">
                    <i className="fas fa-search" onClick={this.searchInput} />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  null,
  { searchNews }
)(SearchModal)
