import './index.css'

const TabItem = props => {
  const {eachItem, changeTab, isActive} = props
  const {tabId, displayText} = eachItem
  const onCLicked = () => {
    changeTab(tabId)
  }
  const activebtnClassName = isActive ? 'active-btn' : ''
  return (
    <li className="item1">
      <button type="button" onClick={onCLicked} className={activebtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
