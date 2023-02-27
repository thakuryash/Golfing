import React, { useState, useEffect } from 'react'

function FetchAPI() {
  const [datas, setData] = useState([])

  // Basket Ball player API
  // useEffect(() => {
  //   const url = 'https://free-nba.p.rapidapi.com/players'

  //   const fetchData = async () => {
  //     const response = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key':
  //           '58b65b2e76msh9a6aca2dc598bd0p1fc7fbjsnce86d3dad003',
  //         'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  //       },
  //     })
  //     const result = await response.json()
  //     console.log(result)
  //     setData(result.data)
  //   }
  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   const url =
  //     'https://live-golf-data.p.rapidapi.com/stats?year=2022&statId=186'

  //   const fetchData = async () => {
  //     const response = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key':
  //           'db09be057dmshe3f2078e6a87442p14553bjsn58f260bdebf6',
  //         'X-RapidAPI-Host': 'live-golf-data.p.rapidapi.com',
  //       },
  //     })
  //     const result = await response.json()
  //     console.log(result.rankings)
  //     console.log(
  //       Number(result.rankings[0].totalPoints.$numberDouble).toFixed(2)
  //     )
  //     setData(result.rankings)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className='list-of-Players'>
      <div className='players'>
        <div className='player-info header'>
          <div className='info-section'>First Name</div>
          <div className='info-section'>Last Name</div>
          <div className='info-section'>Events</div>
          <div className='info-section'>Points Gained</div>
          <div className='info-section'>Points Lost</div>
          <div className='info-section'>Total Points</div>
          <div className='info-section'>Previous Rank</div>
          <div className='info-section'>Rank</div>
        </div>
      </div>
      {datas.map((user) => (
        <div className='players'>
          <div className='player-info' key={user.playerId}>
            <div className='info-section'>{user.firstName}</div>
            <div className='info-section'>{user.lastName}</div>
            <div className='info-section'>{user.events.$numberInt}</div>
            <div className='info-section'>
              {Number(user.pointsGained.$numberDouble).toFixed(2)}
            </div>
            <div className='info-section'>
              {Number(user.pointsLost.$numberDouble).toFixed(2)}
            </div>
            <div className='info-section'>
              {Number(user.totalPoints.$numberDouble).toFixed(2)}
            </div>
            <div className='info-section'>{user.previousRank.$numberInt}</div>
            <div className='info-section'>{user.rank.$numberInt}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FetchAPI
