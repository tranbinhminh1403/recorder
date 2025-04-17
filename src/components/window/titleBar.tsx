import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TitleBar = () => {
  return (
    <div className="handle h-8 cursor-move bg-gray-100 flex items-center justify-end border-b border-gray-200">
    <div className="flex">
      <button className="h-8 w-12 flex items-center justify-center hover:bg-red-500 hover:text-white">
        <span className="text-gray-600">
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </button>
    </div>
  </div>
  )
}

export default TitleBar
