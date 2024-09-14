'use client'

import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './Cursor.module.css'

export function Cursor() {
  const mouse = useRef({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)
  const delayedCursorRef = useRef({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const size = hovered ? 30 : 14

  function handleMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event
    mouse.current.x = clientX
    mouse.current.y = clientY

    const hovered = document.querySelectorAll('a:hover, button:hover')
    setHovered(hovered.length > 0)
  }

  function lerp(start: number, end: number, amount: number) {
    return (1 - amount) * start + amount * end
  }

  function moveCursor(x: number, y: number) {
    gsap.set(cursorRef.current, {x, y, xPercent: -50, yPercent: -50})
  }

  const animate = useCallback(() => {
    const { x, y } = delayedCursorRef.current
    delayedCursorRef.current.x = mouse.current.x
    delayedCursorRef.current.y = mouse.current.y
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
        id={styles.cursor}
        className={styles.blur}
        style={{
          width: size + 'px',
          height: size + 'px',
          transition: 'width 0.2s ease, height 0.2s ease, filter 0.2s ease'
        }}
      />
    </>
  )
}
