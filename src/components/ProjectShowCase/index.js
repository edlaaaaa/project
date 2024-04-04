import './index.css'

const ProjectShowCase = props => {
  const {details} = props
  const {name, imageUrl} = details
  return (
    <li className="app-li">
      <img
        src={
          'https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png'
        }
        className="pic"
        alt={name}
      />
      <p className="name">{name}</p>
    </li>
  )
}

export default ProjectShowCase
