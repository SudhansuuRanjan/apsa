import React from 'react'

const ResourceCard = ({ children, heading, containerStyles,headingStyle, ...rest }) => {
    return (
        <div className={`"flex items-center justify-center w-full"`}>
            <div {...rest}>
                <div className='w-full rounded-2xl bg-sky-700'>
                    <h2 className={`'text-white font-bold py-4 px-6 text-2xl' ${headingStyle}`}>{heading}</h2>
                </div>
                <div className='p-5'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ResourceCard