import React from 'react'

const Heading = ({title}) => {
  return (
     <div className="container mx-auto px-20 flex items-center">
    <hr className="flex-grow border-t border-gray-400" />
    <h3 className="mx-4 text-center text-lg font-semibold uppercase">{title}</h3>
    <hr className="flex-grow border-t border-gray-400" />
  </div>
  )
}

export default Heading