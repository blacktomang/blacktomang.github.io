import React from 'react'
import Transitions from '../components/Transition';

function Home() {

  const leftContent = [
    {
      title: 'Biography',
      lists:
        ['Work for money and codes for love',
          'I\'m Syamsul Arifin, Web Developer Based on Indonesia'
        ]
    },
    {
      title: 'Contact',
      lists: [
        'Malang, East Java',
        'blacktomang@gmail.com',
        '+62895352530708'
      ]
    },
    {
      title: 'Service',
      lists: [
        'Backend Developer',
        'ReactJS Developer'
      ]
    }];
  return (
    <Transitions>
      <h1>Syamsul Arifin</h1>
      <h1>Web Developer</h1>
      <h1>Based on Indonesia</h1>

      <div className="main-content">
        <div className="left-content-wrap">
          <div className='left-content'>
            {
              leftContent.map((content, i) => <div key={i} style={{textAlign:'left'}}><h2 className='content-title'>{content.title}</h2><ul>{content.lists.map((list, i) => <li key={i}>{list}</li>)}</ul></div>)
            }
          </div>
        </div>
        <div className="photo-wrapper">
        <div className="my-photo"><img src="/me.jpg" alt="Syamsul Arifin" /></div>
        </div>
        <div className="right-content-wrap">
          <div className='right-content'>
            {
              leftContent.map((content, i) => <div key={i} style={{textAlign:'right'}}><h2 className='content-title'>{content.title}</h2><ul>{content.lists.map((list, i) => <li key={i}>{list}</li>)}</ul></div>)
            }
          </div>
        </div>
      </div>
    </Transitions>
  )
}

export default Home