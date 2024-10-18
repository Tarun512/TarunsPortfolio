import React from 'react'
import {Link} from 'react-router-dom'
function CertificateCard(props) {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
        {/* <img src={props.img} alt={props.title} className="w-full h-48 object-cover" /> */}
        <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{props.title}</h3>
        <p className="text-gray-700 mb-4">{props.text}</p>
        <a 
          href={props.link} 
          className="inline-block bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
  </div>
</div>

  
    </>
    
  )
}

export default CertificateCard