import React, { FC } from 'react'

// Type definations
import { ContainerProps } from './index.d';

const Container:FC<ContainerProps> = ({
    className = "",
    children
}) => {
  return (
    <div className={`max-w-[1440px] w-[90%] lg:w-[75%] mx-auto ${className}`}>{children}</div>
  )
}

export default Container;