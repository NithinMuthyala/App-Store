import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl, category} = eachApp

  return (
    <li className="item">
      <img src={imageUrl} alt={appName} className="img-item" />
      <p className="app-Name">{appName}</p>
    </li>
  )
}

export default AppItem
