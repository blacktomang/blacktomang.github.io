import './css/animate.css';
import './css/icomoon.css';
import './css/bootstrap.css';
import './css/styles.css';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState(<Home />);
  const [pageNumber, setPageNumber] = useState(0)

  const changePage = (page) => {
    setPageNumber(page);
    switch (page) {
      case 0:
        setPage(<Home />)
        break;
      case 1:
        setPage(<About />)
        break;
      default:
        setPage(<Resume />)
        break;
    }
  }

  useEffect(() => {
    switch (pageNumber) {
      case 0:
        document.body.style.overflow = 'hidden';
        break;
      default:
        document.body.style.overflow = 'scroll';
        break;
    }
  }, [pageNumber]);
  return (
    <>

    <div id='page'>
      {page}
      </div>
      <ul className='fixed-side-icons' style={{ listStyle: 'none' }}>
        <li onClick={() => changePage(0)}>
          <div className="sideIcon"
            style={{
              backgroundColor: pageNumber === 0 ? '#1111ff' : '#1111ff',
              color:pageNumber=== 0 ?'white':'darkblue'
            }}
          >
            <i className="icon-graduation-cap"></i>
          </div>
        </li>
        <li onClick={() => changePage(1)}>
          <div className="sideIcon"
            style={{
              backgroundColor: pageNumber === 0 ? 'white' : '#1111ff',
              color:pageNumber=== 1 ?'white':'darkblue'
            }}
          >
            <i className="icon-graduation-cap"></i>
          </div>
        </li>
        <li onClick={() => changePage(2)}>
          <div className="sideIcon"
            style={{
              backgroundColor: pageNumber === 0 ? 'white' : '#1111ff',
              color:pageNumber=== 2 ?'white':'darkblue'
            }}
          >
            <i className="icon-graduation-cap"></i>
          </div>
        </li>
      </ul>
     { pageNumber !== 0 && <Footer/>}
    </>

  );
}

export default App;
