'use client'

import { useEffect } from 'react'
import styles from './Cursor.module.css'

export function Cursor() {
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
