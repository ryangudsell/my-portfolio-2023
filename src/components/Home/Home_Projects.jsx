import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home_Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('./json/projects.json')
    .then((res) => {
        setProjects(res.data.projects);
        setLoading(false);
    })
    .catch((err) => console.log(err))
  }, [])

  const mappedProjects = projects.map((project) => {
    // const mappedImageURLs = project.images.map((image) => {return <img src={`${image}`} alt={`Mockup Image for ${project.name}`} />})
    return (
      <article key={project.id} className='project-card on-click'
        style={{
          "--project-bg-color": project.backgroundColor,
          "--project-text-color": project.textColor,
          "--project-reverse-text-color": project.reverseTextColor
        }} onClick={() => {navigate(`/projects/${project.id}`)}}>
        <div>
            <img src={`${project.featuredImage}`} 
                alt={`Featured image for ${project.name}`}
                className='featured-image' />
            <div>
                <h2>{project.name}</h2>
                <p>{project.excerpt}</p>
            </div>
          </div>
      </article>
    )
  });

  return (
    <section id='home-projects' className={projects.length % 2 === 0 ? '' : 'odd-length'}>
      {loading ? <>Loading...</> : mappedProjects}
    </section>
  )
}

export default Home_Projects
