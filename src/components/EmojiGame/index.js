/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    emojisList: this.props.emojisList.map(emoji => ({...emoji, id: uuidv4()})),
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    gameOver: false,
  }

  handleClick = id => {
    if (!this.state.clickedEmojis.includes(id)) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedEmojis: [...prevState.clickedEmojis, id],
        emojisList: this.shuffledEmojis(prevState.emojisList),
      }))
    } else {
      this.setState({gameOver: true})
      if (this.state.score > this.state.topScore) {
        this.setState({topScore: this.state.score})
      }
    }
  }

  shuffledEmojis = emojisList => {
    return emojisList.sort(() => Math.random() - 0.5)
  }

  handlePlayAgain = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      gameOver: false,
      emojisList: this.shuffledEmojis(
        this.props.emojisList.map(emoji => ({...emoji, id: uuidv4()})),
      ),
    })
  }

  render() {
    const {score, topScore, emojisList, gameOver} = this.state
    const gameStatus = gameOver
      ? 'lose'
      : score === emojisList.length
      ? 'win'
      : null
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} />
        <ul className="emoji-container-el">
          {emojisList.map(emoji => (
            <EmojiCard
              emoji={emoji}
              key={emoji.id}
              handleClick={this.handleClick}
            />
          ))}
        </ul>
        {gameStatus && (
          <WinOrLoseCard
            status={gameStatus}
            score={score}
            topScore={topScore}
            handlePlayAgain={this.handlePlayAgain}
          />
        )}
      </div>
    )
  }
}
export default EmojiGame
