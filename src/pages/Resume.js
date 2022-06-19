import React from 'react';
import Item from '../components/timeline/Item';
import Title from '../components/timeline/Title';
import resume from '../resume.json';

function Resume() {
  const { data } = resume;
  let xixa = 0;
  return (
    <div id="fh5co-resume" className="fh5co-bg-color">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>My Resume</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline">
              {data.map((d, i) => {
                if (d.type !== 'head') ++xixa;
                return d.type === "head" ? <Title key={i} keyTop={i} text={d.text} /> : <Item key={i} keyTop={i} {...d} align={xixa % 2 === 0} />

              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume