const LanguageButton = ({
  name,
  isActive,
  imageAltText,
  imageUrl,
  changeLanguage,
}) => {
  const onClickBtn = () => changeLanguage(name, imageAltText, imageUrl)
  return (
    <li>
      <button
        type="button"
        className={isActive && 'active-button'}
        onClick={onClickBtn}
      >
        {name}
      </button>
    </li>
  )
}

export default LanguageButton
