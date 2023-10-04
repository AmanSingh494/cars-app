import React from 'react'
import Card from './Card'

const CardsContainer = (props) => {
  const { slicedData } = props
  return (
    <div className='container my-5'>
      <div className='container grid'>
        {slicedData.map((card, index) => {
          return (
            <Card
              key={index}
              name={card.title}
              imgUrl={card.image}
              year={card.start_production}
              type={card.class}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CardsContainer
