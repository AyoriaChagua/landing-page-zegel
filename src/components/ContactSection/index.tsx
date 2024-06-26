import { DownOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import FormContact from '../FormContact';
import './index.css'

export default function ContactSection() {
    return (
        <>
            <div className='relative w-full flex flex-row bg-red-500 text-center items-center justify-center py-24 mt-24'>
                <div className='bg-red-500 absolute top-[-20px] transform -translate-x-1/2 left-1/2 pt-1 px-4 rounded-lg'>
                    {<DownOutlined style={{ color: "#fff", fontSize: 40 }} />}
                </div>
                <p className='w-1/4 text-3xl text-white font-bold'>¡Ahora tú eliges, nosotros te ayudamos a avanzar!</p>
            </div>
            <div className="p-5 flex  flex-row justify-between xl:mx-28 lg:mx-15 md:mx-6 sm:mx-3 mt-10">
                <div className='flex flex-col '>
                    <p className='text-5xl w-1/2 title' style={{ color: "#4F0A3D" }}>Da el <b className='text-red-500'>primer paso</b> hacia tu éxito académico</p>
                    <ul className='mt-10'>
                        <li className='mt-4'>
                            <PhoneOutlined className='text-red-500 text-2xl' />
                            <span className='ml-2 text-red-500 text-lg'>asesor.apellido@zegel.com</span>
                        </li>
                        <li className='mt-4'>
                            <MailOutlined className='text-red-500 text-2xl' />
                            <span className='ml-2 text-red-500 text-lg'>01 00114 00001</span>
                        </li>
                        <li className='mt-4'>
                            <WhatsAppOutlined className='text-red-500 text-2xl' />
                            <span className='ml-2 text-red-500 text-lg'>+51 999 999 999</span>
                        </li>
                    </ul>
                </div>
                <div className='flex w-1/3'>
                    <FormContact />
                </div>

            </div>
        </>
    );
}
