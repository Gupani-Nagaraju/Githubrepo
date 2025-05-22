import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActivelanguagesFilterId} = props
  const {id, language} = languageFilterDetails
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguageFilter = () => {
    setActivelanguagesFilterId(id)
  }
  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickLanguageFilter}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
