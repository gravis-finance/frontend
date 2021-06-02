import React from 'react'

const Icon: React.FC = (props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2"/>
            <path d="M15 14.9037L12 17M12 7L12 17M12 17L8.99997 14.9037" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default Icon
