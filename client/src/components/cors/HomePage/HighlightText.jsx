import React from 'react'

export default function HighlightText({text}) {
  return (
    <span className='font-bold text-blue-200 '>
      {" "} {text}
    </span>
  )
}
