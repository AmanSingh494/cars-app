import React from 'react'

const Card = (props) => {
  let { name, year, imgUrl, type } = props
  return (
    <div
      className='card'
      style={{
        width: '19rem'
        // boxShadow: 'rgba(0, 186, 255,1) 0px 5px 6px 3px'
      }}
    >
      <img
        src={imgUrl}
        className='card-img-top p-2'
        style={{ borderRadius: '20px 20px 0 0' }}
        height='200px'
        alt='...'
      />
      <div className='card-body'>
        <div
          style={{
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}
        >
          <h5 className='card-title ' style={{ display: 'inline-block' }}>
            {name}
          </h5>
          <span style={{ border: '2px dotted black', borderRadius: '10px' }}>
            {/* <i className='bi bi-clock mx-2'></i> */}
            {year === undefined ? 'N/A' : year}
          </span>
        </div>
        <div
          className='card-text '
          style={{ color: 'rgba(140,0,255,1)', fontWeight: '500' }}
        >
          <div>Type : {type}</div>
          <div>Mileage : N/A</div>
          <div>Transmission : N/A</div>
          <div>Fuel : N/A</div>
        </div>
        <div
          className='my-3'
          style={{ height: '0.5px', backgroundColor: 'black' }}
        ></div>
        <div className='d-flex justify-content-between'>
          <span style={{ alignSelf: 'center', fontWeight: '500' }}>
            $100 / Month
          </span>{' '}
          <a
            href='/'
            className='btn btn-primary'
            style={{ backgroundColor: 'rgba(140,0,255,1)' }}
          >
            Rent
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
