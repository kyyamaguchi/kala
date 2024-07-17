'use client'

import { useEffect, useState } from 'react'

import styles from './TopButton.module.css'

export function TopButton() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY)
      if (scrollPosition < 1000)
        setShow(false)
      else
        setShow(true)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollPosition])

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity 0.3s ease'
      }}
      aria-hidden={!show}
      aria-label="Go to top"
    >
      <button className={styles.button}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5.75 10L12 3.75L18.25 10M12 20.25V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
