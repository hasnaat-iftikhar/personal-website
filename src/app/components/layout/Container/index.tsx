import React, { FC } from 'react'

// Type definations
import { ContainerProps } from './index.d';

const Container:FC<ContainerProps> = ({
    className = "",
    children
}) => {
  return (
    <div className={`max-w-[1920px] w-[90%] 2xl:w-[80%] mx-auto ${className}`}>{children}</div>
  )
}

export default Container;