import * as React from 'react'
import words from 'word-list/words.txt'
import './App.css'
import Letter from './Letter'
import RandomLetter from './RandomLetter'

export default class App extends React.Component<
  {},
  { letters: string[]; score: number; words: string[] }
> {
  state = { letters: [] as string[], score: 0, words: [] as string[] }

  componentDidMount() {
    fetch(words)
      .then(response => response.text())
      .then(text => this.setState({ words: text.split('\n') }))
  }

  render() {
    if (this.state.letters) {
      return (
        <>
          {this.state.score}

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
                  this.setState(({ letters, score, words }) => {
                    const word = letters
                      .concat(letter)
                      .join('')
                      .toLowerCase()

                    return words.includes(word)
                      ? { letters: [], score: score + word.length }
                      : { letters: letters.concat(letter), score: score }
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
