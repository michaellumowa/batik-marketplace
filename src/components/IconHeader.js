const IconHeader = ({ name, fillColor = "none" , strokeColor = "#707070", ...props }) => {
    switch (name) {
        case "bell":
            return <div {...props}>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" width="28px" fill={fillColor} viewBox="0 0 24 24" stroke={strokeColor}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            </div>
        case "bag":
            return <div {...props}>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" width="28px" fill={fillColor} viewBox="0 0 24 24" stroke={strokeColor}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </div>
        case "store":
            return <div {...props}>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" width="28px" fill={fillColor} viewBox="0 0 24 24" stroke={strokeColor}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
            </div>
        case "user":
            return <div {...props}>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" width="28px" fill={fillColor} viewBox="0 0 24 24" stroke={strokeColor}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
        default:
            break;
    }
}

export default IconHeader