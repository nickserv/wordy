import * as React from 'react'
import Letter from './Letter'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const randomLetter = () => alphabet[Math.floor(Math.random() * 26)]

export default class RandomLetter extends React.Component<{
  onClick: (letter: string) => void
}> {
  state = { letter: randomLetter() }

  handleClick = () => {
    this.props.onClick(this.state.letter)
    this.setState({ letter: randomLetter() })
  }

  render() {
    return <Letter onClick={this.handleClick}>{this.state.letter}</Letter>
  }
}
