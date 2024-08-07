import React from 'react';

interface Props {
    readonly icon: React.ReactNode;
    readonly text: string;
    readonly onClick: () => void;
    readonly className?: string;
    readonly href?: string;
    readonly target?: string;
    readonly disabled?: boolean;
    readonly type?: 'small' | 'medium' | 'large';
    readonly color?: string;
}

const getButtonSize = (type: 'small' | 'medium' | 'large') => {
    switch (type) {
        case 'small':
            return 'py-1 px-2 text-sm';
        case 'medium':
            return 'py-2 px-4 text-base';
        case 'large':
            return 'py-3 px-6 text-lg';
        default:
            return '';
    }
}

export default function CustomButton({ icon, text, onClick, className, href, target, disabled, type = 'medium', color = 'blue' }: Props) {
    const buttonSize = getButtonSize(type);
    const buttonColor = disabled ? 'bg-gray-400' : `bg-${color}-500 hover:bg-${color}-700`;

    return href ? (
        <a
            href={href}
            target={target}
            className={`inline-flex items-center gap-5 text-xl ${buttonSize} ${buttonColor} text-white font-bold rounded-xl ${className}`}
            aria-disabled={disabled}
            style={{ pointerEvents: disabled ? 'none' : 'auto' }}
        >
            <span className="ml-2">{text}</span>
            {icon}
        </a>
    ) : (
        <button
            onClick={onClick}
            className={`inline-flex items-center gap-5 ${buttonSize} ${buttonColor} text-white font-bold rounded-xl ${className}`}
            disabled={disabled}
        >
            <span className="ml-2 text-xl">{text}</span>
            {icon}
        </button>
    );
}
