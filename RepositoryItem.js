import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {name, imageUrl, starsCount, forksCount, issuesCount} =
    repositoryDetails

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
        />
        <p>{starsCount}</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
        />
        <p>{forksCount}</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
        />
        <p>{issuesCount}</p>
      </div>
    </li>
  )
}
export default RepositoryItem
