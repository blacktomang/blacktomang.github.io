import React from 'react'

function Title({ text, keyTop }) {
  return (
    <li key={keyTop} className="timeline-heading text-center animate-box">
      <div><h3>{text}</h3></div>
    </li>
  )
}

export default Title