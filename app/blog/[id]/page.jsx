"use client"
import TEditor from '@/app/components/TEditor';
import React from 'react'


const page = ({ params }) => {
    console.log('params', params.id)
    return (
        <>
            <div>params {params.id}</div>
            <TEditor/>
        </>
    )
}

export default page