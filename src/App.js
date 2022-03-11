
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Header from'./components/header/header'
import About from './components/About'
import FeatureCardList from './components/FeatureCard_List';
import TopTourList from './components/Top_Tours/Top_Tours_list'
import StorySection from './components/Reviews/Story_Section'
import BookingSection from './components/Booking/Booking_Section';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Header/>
      <About/>
      <FeatureCardList/>
      <TopTourList/>
      <StorySection/>
      <BookingSection/>
      <Footer/>
    </div>
  );
}

export default App;
