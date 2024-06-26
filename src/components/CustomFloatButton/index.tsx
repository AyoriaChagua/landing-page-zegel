import { FloatButton } from "antd"
import { ReactNode } from "react"
import './index.css'

interface CustomFloatButtonProps {
    readonly icon: ReactNode
}

export default function CustomFloatButton({ icon }: CustomFloatButtonProps) {
    return (
        <FloatButton
            onClick={() => console.log('onClick')}
            icon={icon}
            className="custom-float-button-whats-app"
            href="https://wa.me/51933197180"
            target="_blank"
        />
    )
}
