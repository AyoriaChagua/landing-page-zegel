import CardService from '../CardService'
import { DatabaseOutlined, ReadOutlined, TeamOutlined, RocketOutlined } from '@ant-design/icons'

export default function ServicesSection() {
    return (
        <>
            <hr />
            <div className='flex flex-col justify-center items-center gap-10 mt-20'>
                <h3 className='text-4xl text-red-500 font-semibold'>BENEFICIOS</h3>
                <div className='w-36 h-2 bg-red-500 mt-28 mb-10'></div>
                <div className='flex w-full overflow-x-auto gap-20 pb-4 items-center justify-center' style={{ scrollSnapType: 'x mandatory' }}>
                    <div className='flex flex-row gap-20'>
                        <div className='flex-none' style={{ scrollSnapAlign: 'start' }}>
                            <CardService
                                icon={<ReadOutlined style={{ fontSize: "35px", color: "#4F0A3D" }} />}
                                title='Acceso a bibliotecas vistuales'
                                description=''
                            />
                        </div>
                        <div className='flex-none' style={{ scrollSnapAlign: 'start' }}>
                            <CardService
                                icon={<DatabaseOutlined style={{ fontSize: "35px", color: "#4F0A3D" }} />}
                                title='Bases de datos especializados'
                                description=''
                            />
                        </div>
                        <div className='flex-none' style={{ scrollSnapAlign: 'start' }}>
                            <CardService
                                icon={<RocketOutlined style={{ fontSize: "35px", color: "#4F0A3D" }} />}
                                title='Herramientas de última generación'
                                description=''
                            />
                        </div>
                        <div className='flex-none' style={{ scrollSnapAlign: 'start' }}>
                            <CardService
                                icon={<TeamOutlined style={{ fontSize: "35px", color: "#4F0A3D" }} />}
                                title='Orientación y mentoría personalizada'
                                description=''
                            />
                        </div>
                    </div>
                </div>
                <div className='flex text-center w-3/4 lg:w-1/2 md:w-1/2 mt-10'>
                    <span className='text-lg font-semibold' style={{ color: "#4F0A3D" }}>
                        En Zegel, nos comprometemos a garantizar un buen ambiente para nuestros estudiantes, donde su integridad y futuro como profesionales y  atención  son prioritarios. Nuestros programas están diseñados para brindar ayuda  y promover el crecimiento personal y académico.
                    </span>
                </div>
            </div>
        </>
    )
}
