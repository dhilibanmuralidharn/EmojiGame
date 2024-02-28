import './index.css'

const WinOrLoseCard = ({status, score, topScore, handlePlayAgain}) => {
  const isWin = status === 'win'

  return (
    <div>
      {isWin ? <h1>You Won</h1> : <h1>You Lose</h1>}
      <div>
        <p>{isWin ? 'Best Score' : 'Score'}</p>
        <p>Score: {score} / 12</p>
        {!isWin && <p>Top Score: {topScore}</p>}
      </div>
      <div>
        <img
          src={isWin ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png' : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'}
          alt="win or lose"
        />
      </div>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  )
}
export default WinOrLoseCard
