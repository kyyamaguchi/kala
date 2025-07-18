import type { TargetAndTransition, Transition } from 'motion/react'

export const fadeInFrom: TargetAndTransition = {
  opacity: 0,
  transform: 'translateY(24px)'
}
export const fadeInTo: TargetAndTransition = {
  opacity: 1,
  transform: 'translateY(0px)'
}
export const fadeInProps: Transition = {
  type: 'tween',
  ease: [0.23, 1, 0.32, 1],
  duration: 2
}
