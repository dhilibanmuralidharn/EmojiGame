import './index.css'

const NavBar = ({score, topScore}) => {
  return (
    <div className="nav-bg">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="scores">Score: {score}</p>
        <p className="scores">Top Score: {topScore}</p>
      </div>
    </div>
  )
}
export default NavBar
