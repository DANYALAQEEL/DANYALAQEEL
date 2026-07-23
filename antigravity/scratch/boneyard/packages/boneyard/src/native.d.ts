import { type ReactNode } from 'react'
import { type ViewStyle } from 'react-native'
import type { SkeletonResult, ResponsiveBones } from './types.js'

export type AnimationStyle = 'pulse' | 'shimmer' | 'solid' | boolean

export declare function configureBoneyard(config: {
  color?: string
  darkColor?: string
  animate?: AnimationStyle
  stagger?: number | boolean
  transition?: number | boolean
}): void

export declare function registerBones(map: Record<string, SkeletonResult | ResponsiveBones>): void

export interface SkeletonProps {
  loading: boolean
  children: ReactNode
  name?: string
  initialBones?: SkeletonResult | ResponsiveBones
  color?: string
  darkColor?: string
  dark?: boolean
  animate?: AnimationStyle
  stagger?: number | boolean
  transition?: number | boolean
  style?: ViewStyle
  fallback?: ReactNode
}

export declare function Skeleton(props: SkeletonProps): import('react/jsx-runtime').JSX.Element
