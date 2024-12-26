import React from 'react'

export default function SideMenu({ icon, title, children }) {
    return (
        <ul>
            <li>
                <a href="" className='flex gap-x-2'>
                    <div className='mt-1 w-5 h-5'>{icon}</div>
                    <span>{title}</span>
                </a>
            </li>
            <ul>
                {children}
            </ul>
        </ul>
    )
}
