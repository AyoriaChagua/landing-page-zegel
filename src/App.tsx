import { WhatsAppOutlined } from '@ant-design/icons'
import './App.css'
import CustomFloatButton from './components/CustomFloatButton'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <CustomFloatButton
        icon={<WhatsAppOutlined className='custom-float-icon' />}
      />
    </>
  )
}

export default App
