import { useState } from 'react'
import './App.css'
import './index.css';

import Event from './components/Event'

function App() {
  const [count, setCount] = useState(0)

  const events = [
    {
      image: "https://example.com/images/tech-conference.jpg",
      name: "Global Tech Conference",
      country: "USA",
      link: "https://example.com/global-tech-conference"
    },
    {
      image: "https://example.com/images/music-festival.jpg",
      name: "Summer Music Festival",
      country: "Canada",
      link: "https://example.com/summer-music-festival"
    },
    {
      image: "https://example.com/images/ai-summit.jpg",
      name: "AI Innovation Summit",
      country: "Germany",
      link: "https://example.com/ai-summit"
    },
    {
      image: "https://example.com/images/film-festival.jpg",
      name: "International Film Festival",
      country: "France",
      link: "https://example.com/film-festival"
    },
    {
      image: "https://example.com/images/startup-bootcamp.jpg",
      name: "Startup Bootcamp",
      country: "UK",
      link: "https://example.com/startup-bootcamp"
    },
    {
      image: "https://example.com/images/art-expo.jpg",
      name: "Contemporary Art Expo",
      country: "Italy",
      link: "https://example.com/art-expo"
    },
    {
      image: "https://example.com/images/environment-conference.jpg",
      name: "Green Earth Environment Conference",
      country: "Australia",
      link: "https://example.com/environment-conference"
    },
    {
      image: "https://example.com/images/blockchain-summit.jpg",
      name: "Blockchain Revolution Summit",
      country: "Switzerland",
      link: "https://example.com/blockchain-summit"
    },
    {
      image: "https://example.com/images/gaming-expo.jpg",
      name: "World Gaming Expo",
      country: "Japan",
      link: "https://example.com/gaming-expo"
    },
    {
      image: "https://example.com/images/food-festival.jpg",
      name: "Gourmet Food Festival",
      country: "Spain",
      link: "https://example.com/food-festival"
    },
    {
      image: "https://example.com/images/space-exploration.jpg",
      name: "Space Exploration Summit",
      country: "Russia",
      link: "https://example.com/space-exploration"
    },
    {
      image: "https://example.com/images/photography-conference.jpg",
      name: "Photography Masters Conference",
      country: "Brazil",
      link: "https://example.com/photography-conference"
    },
    {
      image: "https://example.com/images/healthcare-summit.jpg",
      name: "Global Healthcare Summit",
      country: "India",
      link: "https://example.com/healthcare-summit"
    },
    {
      image: "https://example.com/images/robotics-conference.jpg",
      name: "Robotics and Automation Conference",
      country: "South Korea",
      link: "https://example.com/robotics-conference"
    },
    {
      image: "https://example.com/images/wildlife-conservation.jpg",
      name: "Wildlife Conservation Forum",
      country: "Kenya",
      link: "https://example.com/wildlife-conservation"
    },
    {
      image: "https://example.com/images/education-summit.jpg",
      name: "Future of Education Summit",
      country: "Finland",
      link: "https://example.com/education-summit"
    },
    {
      image: "https://example.com/images/fitness-conference.jpg",
      name: "Global Fitness Conference",
      country: "South Africa",
      link: "https://example.com/fitness-conference"
    },
    {
      image: "https://example.com/images/innovation-awards.jpg",
      name: "Innovation Awards Gala",
      country: "Singapore",
      link: "https://example.com/innovation-awards"
    }
  ];
  

  return (
    <>
    {/* <Event image={reactLogo} name="React" country="USA" link="https://reactjs.org" /> */}
    
    <div>
      {events.map((event, index) => (
        <div key={index}>
          <Event  name={event.name} country={event.country} link={event.link} />
        </div>
      ))}
    </div>
  </>
  )  
}

export default App
