'use client'

import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './Cursor.module.css'

export function DifferenceCursor() {
  const mouse = useRef({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)
  const delayedCursorRef = useRef({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const size = hovered ? 30 : 14

  function handleMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event
    mouse.current.x = clientX
    mouse.current.y = clientY

    const hovered = document.querySelector('a:hover')
    setHovered(!!hovered)
  }

  function lerp(start: number, end: number, amount: number) {
    return (1 - amount) * start + amount * end
  }

  function moveCursor(x: number, y: number) {
    gsap.set(cursorRef.current, {x, y, xPercent: -50, yPercent: -50})
  }

  const animate = useCallback(() => {
    const { x, y } = delayedCursorRef.current
    delayedCursorRef.current.x = lerp(x, mouse.current.x, 0.1)
    delayedCursorRef.current.y = lerp(y, mouse.current.y, 0.1)
    moveCursor(delayedCursorRef.current.x, delayedCursorRef.current.y)
    window.requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    animate()
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [animate])

  return (
    <>
      <div
        ref={cursorRef}
        id={styles["difference-cursor"]}
        style={{
          width: size + 'px',
          height: size + 'px',
          transition: 'width 0.2s ease, height 0.2s ease, filter 0.2s ease'
        }}
      />
    </>
  )
}

export function PulsatingCursor() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById(styles.cursor)
      if (cursor) {
        cursor.style.left = e.pageX + 'px'
        cursor.style.top = e.pageY + 'px'
      }
    }

    const handleMouseEnter = () => {
      const cursor = document.getElementById(styles.cursor)
      if (cursor) {
        cursor.style.display = 'block'
      }
    }

    const handleMouseLeave = () => {
      const cursor = document.getElementById(styles.cursor)
      if (cursor) {
        cursor.style.display = 'none'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    const links = document.querySelectorAll(`a`)
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter)
      link.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter)
        link.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div id={styles.cursor}></div>
    </>
  )
}
