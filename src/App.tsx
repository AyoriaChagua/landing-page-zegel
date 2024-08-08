import { WhatsAppOutlined } from '@ant-design/icons'
import './App.css'
import CustomFloatButton from './components/CustomFloatButton'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import { useApp } from './hooks/useApp'
import TrackerModal from './components/TrackerModal'

function App() {
  const { handleCancel, handleOk, isModalOpen, showModal, dataTracker } = useApp();
  return (
    <>
      <Navbar showModal={showModal}/>
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <CustomFloatButton
        icon={<WhatsAppOutlined className='custom-float-icon' />}
      />
      <TrackerModal
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
        dataTracker={dataTracker}
      />
    </>
  )
}

export default App
