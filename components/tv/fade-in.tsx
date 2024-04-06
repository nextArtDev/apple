'use client'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

export const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // margin: when it should trigger the intersectional observer, ITs likw regular margin: top right bottom left
      // 100% beyond the top, -300px from the bottom until it stops fading in
      //   viewport={{ margin: '-30% 0px -300px 0px' }}
      viewport={{ margin: '100% 0px -300px 0px' }}
    >
      {children}
    </motion.div>
  )
}
