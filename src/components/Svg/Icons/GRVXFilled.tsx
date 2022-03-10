import React from 'react'

const Icon: React.FC = (props) => {
    return (
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" {...props}>
            <circle cx="12.5" cy="13" r="12.5" fill="#C4C4C4"/>
            <circle cx="12.5" cy="13" r="12.5" fill="url(#paint0_linear_11747_1462)"/>
            <circle cx="12.5" cy="13" r="12.5" fill="url(#paint1_linear_11747_1462)"/>
            <path d="M15.4653 12.1172L11.8489 10.0993C11.175 9.72328 10.3452 10.2105 10.3452 10.9822V15.0179C10.3452 15.7896 11.175 16.2768 11.8489 15.9008L15.4653 13.8829C16.1565 13.4973 16.1565 12.5028 15.4653 12.1172Z" stroke="white" strokeWidth="2.08333"/>
            <path d="M19.3847 14.8443C19.0406 16.1289 18.3437 17.2914 17.3731 18.2005C16.4025 19.1096 15.1969 19.7289 13.8926 19.9883C12.5883 20.2477 11.2374 20.137 9.9928 19.6685C8.74818 19.2001 7.65951 18.3927 6.84995 17.3376C6.04039 16.2826 5.54226 15.0221 5.41191 13.6986C5.28157 12.3752 5.52421 11.0417 6.11238 9.84896C6.70056 8.65625 7.61079 7.65196 8.7401 6.94971C9.86941 6.24746 11.1727 5.87528 12.5026 5.87528" stroke="white" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_11747_1462" x1="12.5" y1="0.5" x2="12.5" y2="25.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#009CE1"/>
                    <stop offset="1" stopColor="#1C77FF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_11747_1462" x1="12.5" y1="0.5" x2="12.5" y2="25.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#29D98F"/>
                    <stop offset="1" stopColor="#0BB870"/>
                </linearGradient>
            </defs>
        </svg>

    )
}

export default Icon
