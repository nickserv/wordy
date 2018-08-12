import * as React from 'react'
import words from 'word-list/words.txt'
import './App.css'
import Letter from './Letter'
import RandomLetter from './RandomLetter'

export default class App extends React.Component<
  {},
  { letters: string[]; words: string[] }
> {
  state = { letters: [] as string[], words: [] as string[] }

  componentDidMount() {
    fetch(words)
      .then(response => response.text())
      .then(text => this.setState({ words: text.split('\n') }))
  }

  render() {
    if (this.state.letters) {
      return (
        <>
          <div className="letters">
            {this.state.letters.map((letter, index) => (
              <Letter key={index}>{letter}</Letter>
            ))}
          </div>

          <div className="letters">
            {Array.from({ length: 10 }, (value, index) => (
              <RandomLetter
                key={index}
                onClick={letter => {
                  this.setState(({ letters, words }) => {
                    const word = letters
                      .concat(letter)
                      .join('')
                      .toLowerCase()

                    return {
                      letters: words.includes(word)
                        ? []
                        : letters.concat(letter)
                    }
                  })
                }}
              />
            ))}
          </div>
        </>
      )
    } else {
      return (
        <div className="letters">
          {'LOADING'.split('').map(letter => (
            <Letter key={letter}>{letter}</Letter>
          ))}
        </div>
      )
    }
  }
}
