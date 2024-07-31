import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-gradient-to-br text-white from-purple-500 flex-col via-purple-700 to-blue-600 flex justify-center items-center'>
        <h2 className='text-3xl font-bold'>Browse All Templates</h2>
        <p>What would you like to create today ?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 rounded items-center p-2 border  bg-white my-5 w-[50%]'>
                <Search className='text-slate-600 '/>
                <input onChange={(event)=>onSearchInput(event.target.value)} type='text' placeholder='Search...' className='bg-transparent rounded w-ful outline-none text-slate-700'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection