import { Routes, Route } from 'react-router-dom'
import HomePage from './app/page'
import FeaturedPage from './app/featured/page'
import BlogPage from './app/blog/page'
import ExperiencePage from './app/experience/page'
import ProjectsPage from './app/projects/page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/featured" element={<FeaturedPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  )
}

export default App