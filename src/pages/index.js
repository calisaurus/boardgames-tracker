// Step 1: Import React
import React from 'react'

export default class IndexPage extends React.Component {
  currentDate = new Date()
  state = {
    title: "",
    date: this.currentDate.toISOString().slice(0, 10),
    coop: "",
    winner: "",
    noOfPlayers: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(`You played ${this.state.title} on ${this.state.date}. ${this.state.winner} was the winner!`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input 
            type="text"
            name="title" 
            value={this.state.title}
            onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Date
            <input 
            type="text"
            name="date" 
            value={this.state.date}
            onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Co-op
            <input 
            type="text"
            name="coop" 
            value={this.state.coop}
            onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Winner
            <input 
            type="text"
            name="winner" 
            value={this.state.winner}
            onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Number of Players
            <input 
            type="text"
            name="noOfPlayers" 
            value={this.state.noOfPlayers}
            onChange={this.handleInputChange}/>
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <b>Data preview</b>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}