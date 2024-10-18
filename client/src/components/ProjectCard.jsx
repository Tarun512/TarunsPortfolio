import React from 'react'

function ProjectCard(props) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 justify-center items-center">{props.title}</h2>
      <p className="text-gray-700 mb-6">{props.text}</p>
      <div className="flex justify-between">
        <a 
          href={props.demo} 
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a 
          href={props.source} 
          className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  )
}

export default ProjectCard