import { faWindowMaximize, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TitleBar = ({ title, handleClose }: { title: string, handleClose: () => void }) => {
  return (
    <div className="handle h-8 cursor-move bg-white flex items-center justify-between border-b border-gray-300">
    <div className="px-4 text-sm font-medium text-gray-700">
      {title}
    </div>
    <div className="flex">
      <button className="h-8 w-12 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
        <FontAwesomeIcon
          icon={faWindowMinimize}
          className="text-gray-600"
          size="sm"
        />
      </button>
      <button className="h-8 w-12 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
        <FontAwesomeIcon
          icon={faWindowMaximize}
          className="text-gray-600"
          size="sm"
        />
      </button>
      <button
        onClick={handleClose}
        className="h-8 w-12 flex items-center justify-center hover:bg-red-500 hover:text-white group cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="text-gray-600 group-hover:text-white"
          size="sm"
        />
      </button>
    </div>
  </div>
  )
}

export default TitleBar
