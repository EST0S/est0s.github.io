import { Routes, Route } from 'react-router-dom'
import HomePage from './app/page'
import ResumePage from './app/resume/page'
import BlogPage from './app/blog/page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  )
}

export default App