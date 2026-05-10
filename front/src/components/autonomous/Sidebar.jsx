import React from 'react'
import { Card } from '../ui/Card'
import { Settings, Activity, ListTodo, GitBranch, TriangleAlert } from "lucide-react";

const Sidebar = () => {
    return (
        <div className='h-screen w-76 bg-gray-100 border-white/10 backdrop-blur-xl bg-white/5'>
            <div className='text-zinc-400  text-2xl list-decimal '>
                <div className="p-4 text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-stone-700 via-slate-500 to-zinc-500">
                    De-CODE
                </div>
                <div className='pb-10'> <hr className='bg-white h-0.5' /></div>
                <div className='p-4 w-74 hover:bg-indigo-600/20 hover:scale-105 cursor pointer transition-transform ease-in-out flex flex-row duration-150 gap-6'> <Activity />Live Feed</div>
                <div className='p-4 w-74 hover:bg-indigo-600/20  hover:scale-105 cursor pointer transition-transform ease-in-out flex flex-row duration-150 gap-6'><TriangleAlert />Findings</div>
                <div className='p-4 w-74 hover:bg-indigo-600/20  hover:scale-105 cursor pointer transition-transform ease-in-out flex flex-row duration-150 gap-6'><ListTodo />Task Board</div>
                <div className='p-4 w-74 hover:bg-indigo-600/20  hover:scale-105 cursor pointer transition-transform ease-in-out flex flex-row duration-150 gap-6'><GitBranch />Repositories</div>
                <div className='p-4 w-74 hover:bg-indigo-600/20  hover:scale-105 cursor pointer transition-transform ease-in-out flex flex-row duration-150 gap-6'><Settings />Settings</div>
            </div>
        </div>
    )
}

export default Sidebar
