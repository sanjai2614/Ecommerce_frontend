import React from 'react'

export default function Spinner() {
    return (
        <div>
            <div className="flex justify-center items-center h-100">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
            </div>
        </div>
    )
}
