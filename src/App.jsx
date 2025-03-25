import './styles/style.css'
import Header from './components/header/header.jsx'
import Carousel from './components/Home/carousel.jsx'
import FirstSection from './components/sections/firstSection.jsx'
import SecondSection from './components/sections/secondSection.jsx'
import ThirdSection from './components/sections/thirdSection.jsx'
import FourthSection from './components/sections/fourthSection.jsx'
import FifthSection from './components/sections/fifthSection.jsx'
import Footer from './components/footer/footer.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './components/router.jsx'

function App() {
    return <RouterProvider router={router}/>
}

export default App