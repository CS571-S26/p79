import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>This is my project Campus Survival Hub</p>
      <strong>Porject Description:</strong>
      <p>An interactive website created to help new and current students better adapt to campus life. The goal of my project is to create a central, easy to use platform where students can find important resources, little known places, and practical tips for surviving college. The site will have sections organized by category, such as the best places to study, affordable food, gym and wellness tips, productivity strategies, and campus hacks. Each place or tip will include a brief description, photos, and important details such as hours, approximate prices or noise level. To make it more interactive, users will be able to save their favorite places or tip, filter by category (e.g: quiet study, late night food or cheap), and submit their own recommendations using a simple form. Also there will be a 1-5 star rating system so students can quickly identify the most popular places. The design will be clean, easy to navigate, and adaptable for both computers and cellphones. Interactive JavaScript features will be used, such as dynamic filters, the option to save favorites and local storage to maintain user preferences. By combining useful information with student contributions, the platform is trying to encourage collaboration and building a stronger, more informed campus community.</p>
    </>
  )
}

export default App
