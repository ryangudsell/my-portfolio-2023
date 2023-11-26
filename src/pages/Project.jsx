import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const Project = () => {
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {
    axios.get('./json/projects.json')
    .then((res) => {
      setProject(res.data.projects[id])
      console.log(project);
    })
    .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    console.log(project);
  }, [project])

  return (
    <main id='project-page'
    style={{
      "--project-bg-color": project?.backgroundColor,
      "--project-text-color": project?.textColor,
      "--project-reverse-text-color": project?.reverseTextColor,
      }}>
      {!project ? <>Loading Project...</> : 
      <>
        <h1>
          {project.name}<br />
          {project?.link && <Link to={`${project.link}`}>View this site</Link>}
        </h1>
        <div><img src={`${project.featuredImage}`} alt={`Featured Image showing the ${project.name} Web App`} /></div>
        <p>{project.description}</p>
        <h3>Technologies Used:</h3>
        <ul>
          {project.technologies.map((li) => {
            return (
              <li><p>{li}</p></li>
            )
          })}
        </ul>
        <div id='project-images'>
          {project.images.map((image) => {
            return (
              <img src={`${image}`} alt={`Mockup image for ${project.name}`} />
            )
          }).reverse()}
        </div>
      </>}
    </main>
  )
}

export default Project
