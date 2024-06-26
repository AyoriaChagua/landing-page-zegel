import { DownOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import './index.css';

interface Props {
    readonly icon: React.ReactNode
    readonly title: string
    readonly description?: string
    readonly buttonText?: string
    readonly buttonLink?: string
}

export default function CardService({ icon, title }: Props) {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionVisible(!isDescriptionVisible);
    };

    return (
        <div className='w-80 h-80 flex flex-col p-5 border-4 border-red-500 rounded-xl justify-between items-center text-center'>
            {icon}
            <span style={{ color: "#4F0A3D" }} className={`${isDescriptionVisible ? "text-md": "text-2xl"} font-semibold`}>{title}</span>
            <DownOutlined onClick={toggleDescription} style={{ cursor: 'pointer' }} />
            <div className={`description-container ${isDescriptionVisible ? 'expanded' : ''}`}>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorem reprehenderit facere, libero, vitae provident officiis voluptatibus hic tempore sapiente aut eaque corporis! Saepe ea, autem nisi maxime commodi ab.</p>
            </div>
        </div>
    )
}