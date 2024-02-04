import React from 'react'
import './Choose.scss'

function Choose () {
  const data = [
    {
      id: 1,
      title: 'Excellence',
      description:
        "At Lilavati Academy, we're committed to excellence in education, ensuring that every student reaches their full potential.",
      image: './assets/excellence.svg'
    },
    {
      id: 2,
      title: 'Dedicated Faculty',
      description:
        "Our highly qualified and passionate educators are dedicated to nurturing your child's academic and personal growth.",
      image: './assets/dedicated.svg'
    },
    {
      id: 3,
      title: 'Character Building',
      description:
        'We instill values and ethics that help students become responsible citizens and compassionate individuals.',
      image: './assets/good_team.svg'
    }
  ]
  return (
    <div className='choose_container'>
      <div className='wraper'>
        <div className='header_text_container'>
          <h1 className='header_text'>Why Choose Lilavati?</h1>
        </div>
        <div className='choose_card_container'>
          {data.map(item => {
            return (
              <div className='choose_card' key={item.id}>
                <div className='choose_card_image'>
                  <img src={item.image} alt='img' />
                </div>
                <div className='choose_card_content'>
                  <h1 className='choose_card_title'>{item.title}</h1>
                  <p className='choose_card_description'>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Choose
