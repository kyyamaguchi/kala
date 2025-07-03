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
  ease: 'easeOut',
  duration: 0.8
}
