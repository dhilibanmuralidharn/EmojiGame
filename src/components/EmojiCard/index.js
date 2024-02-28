import './index.css'

const EmojiCard = props => {
  const {emoji, handleClick} = props
  const {emojiName, emojiUrl, id} = emoji

  const handleClickEmoji = () => {
    handleClick(id)
  }

  return (
    <li className="list-emoji-container" onClick={handleClickEmoji}>
      <button className="emoji-button">
        <img src={emojiUrl} alt={emojiName} className="emoji-logo" />
      </button>
    </li>
  )
}
export default EmojiCard
