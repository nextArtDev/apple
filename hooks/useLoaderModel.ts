import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'

type Props = {}

export const useLoaderModel = ({ model, img }: any) => {
  const { nodes, materials } = useGLTF(model)
  const texture = useTexture(img)

  return { nodes, materials, texture }
}
