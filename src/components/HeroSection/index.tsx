import { CarryOutOutlined, InstagramOutlined } from '@ant-design/icons'
import CustomButton from '../CustomButton'
import './index.css'
import LikeButton from '../LikeButton'

export default function HeroSection() {
    let storedUserId = localStorage.getItem('userId');
    const pageUrl = window.location.pathname;



    return (
        <div className='p-5 flex flex-col  md:flex-row justify-between xl:mx-28 lg:mx-15 md:mx-6 sm:mx-3 gap-5 items-center'>
            <div className='mb-5 md:mb-0 md:w-1/2 lg:w-7/12 flex flex-col justify-center'>
                <div className='flex flex-row items-center gap-10'>
                    <div className='flex flex-col'>
                        <span className='text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 text-red-500 title'>POTENCIA TU ÉXITO ACADÉMICO CON NUESTRA ASESORÍA ESTUDIANTIL</span>
                    </div>
                </div>
                <div className='mt-16'>
                    <p className='text-2xl text-red-500 '>Realizamos el mejor acompañamiento personalizado para alcanzar tus metas educativas con la ayuda de modernas herramientas y personal capacitado </p>
                </div>
                <div className="mt-16">
                    <CustomButton
                        icon={<CarryOutOutlined style={{ fontSize: 30 }} />}
                        onClick={() => { }}
                        text='Reserva tu sesión de asesoria'
                        color='red'
                        type='large'

                    />
                </div>
                <div className="mt-4">
                    <CustomButton
                        icon={<InstagramOutlined style={{ fontSize: 30 }} />}
                        onClick={() => { }}
                        text='Visitanos nuestro Instagram'
                        color='red'
                        type='large'
                        href='https://www.instagram.com/zegel.sae/?hl=es'
                        target='_blank'
                    />
                </div>
                <div className="mt-4">
                    <div className='flex flex-row '>
                        <div className='flex border border-red-500 rounded-xl px-4 items-center gap-2 '>
                            <span className='text-red-500 text-xl'>Ayudanos  seguir, dale me gusta!</span>
                            <LikeButton pageUrl={pageUrl} userId={storedUserId} />
                        </div>
                    </div>
                </div>
            </div>
            {/* hacer collage */}
            <div className='w-full md:w-1/2 lg:w-4/12'>
                <img src='/landing-page-zegel/img/hero.png' />
            </div>
        </div>
    )
}