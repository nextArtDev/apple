import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

interface animateWithGsapProps {
  target: string
  animationProps: any
  scrollProps?: any
}

export const animateWithGsap = (
  target: string,
  animationProps: gsap.TweenVars,
  scrollProps?: gsap.DOMTarget | ScrollTrigger.Vars | undefined
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    },
  })
}

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  })

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  )
}
