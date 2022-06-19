import React from 'react'

function Item({ keyTop,title, url, company, date, text, align, icon }) {
  return (
    <li key={keyTop} className={`animate-box timeline-${align ? 'inverted' : 'unverted'}`}>
      <div className="timeline-badge"><i className={`${icon === 'work' ? 'icon-suitcase' :'icon-graduation-cap'}`}></i></div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h3 className="timeline-title">{title}</h3>
          <span className="company"><a href={url} target="_blank" rel="noopener noreferrer">{company}</a> - {date}</span>
        </div>
        <div className="timeline-body">
          <p>{text}</p>
        </div>
      </div>
    </li>
  )
}

export default Item