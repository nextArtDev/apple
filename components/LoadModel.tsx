import { useEffect, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function LoadModel({ img, model }: any) {
  const { nodes, materials } = useGLTF(`${model}`)
  const texture = useTexture(img)

  return { nodes, materials, texture }
}
