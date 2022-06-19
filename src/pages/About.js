import React from 'react'
import me from "../about.json";

function About() {
  return (
    <div id="fh5co-about" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="info">
              <li><span className="first-block">Full Name:</span><span className="second-block">{me.name}</span></li>
              <li><span className="first-block">Phone:</span><span className="second-block">{me.phone}</span></li>
              <li><span className="first-block">Email:</span><span className="second-block">{me.email}</span></li>
              <li><span className="first-block">Website:</span><span className="second-block">{me.websites}</span></li>
              <li><span className="first-block">Address:</span><span className="second-block">{me.address}</span></li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2>Hello There!</h2>
            <p>There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.</p>
            <p>Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci there live the blind texts from the countries Vokalia and Consonantia, there live the blind texts. Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.</p>
            <p>
            </p>
              <ul className="fh5co-social-icons">
                <li><a href="/#"><i className="icon-twitter2"></i></a></li>
                <li><a href="/#"><i className="icon-facebook3"></i></a></li>
                <li><a href="/#"><i className="icon-linkedin2"></i></a></li>
                <li><a href="/#"><i className="icon-dribbble2"></i></a></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About