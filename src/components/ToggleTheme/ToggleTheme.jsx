import React, { useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

function ToggleTheme() {

    const SystemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const pagesClasses = document.documentElement.classList
    useEffect(()=>{
        SystemPreference && pagesClasses.add('dark')
    })

    const Toggle = () =>{
        pagesClasses.toggle('dark')
    }
  return (
    <div className='hidden sm:block'>
        <MoonIcon className='h-8 text-gray-100 block dark:hidden cursor-pointer' onClick={Toggle}/>
        <SunIcon className='h-8 hidden text-gray-100 dark:block cursor-pointer' onClick={Toggle}/>
    </div>
  )
}

export default ToggleTheme