import React from 'react'

function About() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let interval = null

  const handleClick = (event) => {
    let iteration = 0

    clearInterval(interval)

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index]
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join('')

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
    }, 30)
  }

  return (
    <div className='about-content-section'>
      <h1 data-value='HYPERPLEXED' onMouseEnter={handleClick}>
        HYPERPLEXED{' '}
      </h1>
    </div>
  )
}

export default About
