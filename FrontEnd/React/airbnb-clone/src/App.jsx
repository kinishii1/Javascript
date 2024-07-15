import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import Carousel from './components/Carousel/Carousel'

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <div className="cards">
    {/* <Carousel> */}
    <Card 
    img='profile1'
    grade='5.0'
    location='USA'
    desc='Life lessons with Katie Zaferes'
    price='136'
    />
    <Card 
    img='profile2'
    grade='4.0'
    location='USA'
    desc='Learn wedding photography'
    price='125'
    /> 
    <Card 
    img='profile3'
    grade='5.0'
    location='USA'
    desc='Group Mountain Biking'
    price='136'
    />
    <Card 
    img='profile4'
    grade='5.0'
    location='USA'
    desc='Life lessons with Katie Zaferes'
    price='136'
    />
    <Card 
    img='profile5'
    grade='5.0'
    location='USA'
    desc='Life lessons with Katie Zaferes'
    price='136'
    />
    <Card 
    img='profile6'
    grade='5.0'
    location='USA'
    desc='Life lessons with Katie Zaferes'
    price='136'
    />
    <Card 
    img='profile7'
    grade='3.6'
    location='USA'
    desc='Life lessons with Katie Zaferes'
    price='100'
    />
     <Card 
    img='profile4'
    grade='5.0'
    location='USA'
    desc='Life lessons with Katie Zaferes'
    price='136'
    />
    <Card 
    img='profile5'
    grade='5.0'
    location='USA'
    desc='Life lessons with Katie Zaferes'
    price='136'
    />
    <Card 
    img='profile6'
    grade='5.0'
    location='USA'
    desc='Life lessons with Katie Zaferes'
    price='136'
    />
    <Card 
    img='profile7'
    grade='3.6'
    location='USA'
    desc='Life lessons with Katie Zaferes'
    price='100'
    />
  {/* </Carousel> */}
    </div>

    </>
  )
}

export default App
