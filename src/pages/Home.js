import React from 'react';
import me from '../about.json';

function Home() {
  const { name, job } = me;
  return (
    <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{ backgroundImage:'url(images/cover_bg_3.jpg)'}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                <div className="profile-thumb" style={{ backgroundImage:'url(me.jpg)'}}></div>
                <h1><span>{name}</span></h1>
                <h3><span>{job}</span></h3>
                {/* <p> */}
                <p></p>
                  <ul className="fh5co-social-icons">
                    <li><a href="/#"><i className="icon-twitter2"></i></a></li>
                    <li><a href="/#"><i className="icon-facebook2"></i></a></li>
                    <li><a href="/#"><i className="icon-linkedin2"></i></a></li>
                    <li><a href="/#"><i className="icon-dribbble2"></i></a></li>
                  </ul>
                {/* </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home