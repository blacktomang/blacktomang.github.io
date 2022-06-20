import React, { useEffect, useState } from 'react';
import me from '../about.json';

function Home() {
  const { name, job } = me;
  const [isMobileState, setIsMobile] = useState(false);
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  useEffect(() => {
    var fullHeight = function () {

      if (isMobile.any()) {
        console.info('is mobile')
        setIsMobile(true);
      } else {
        // $('.js-fullheight').css('height', $(window).height());
        // $(window).resize(function () {
        //   $('.js-fullheight').css('height', $(window).height());
        // });
      }
    };
    fullHeight();
    return () => fullHeight();
  }, [])

  return (
    <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{
      backgroundImage: 'url(images/cover_bg_3.jpg)',
      height: isMobileState ? '' : window.outerHeight
    }}
      data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight"
              // style={{ height: isMobileState ? '' : window.outerHeight }}
            >
              <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn"
                style={{ height: isMobileState ? '' : window.outerHeight }}
              >
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