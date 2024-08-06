'use client'

import { useEffect, useRef, useState } from 'react'

import styles from './FadeWrapper.module.css'

export function FadeWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true)
        ref.current && observer.unobserve(ref.current)
      }
    })

    ref.current && observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
        ref={ref}
        className={`${styles["fade-wrapper"]} ${isVisible ? styles.visible : ''}`}
      >
        {children}
      </div>
    </>
  )
}
