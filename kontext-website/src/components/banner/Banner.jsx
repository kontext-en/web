import React from 'react'
import Image from 'react-bootstrap/Image'
import puppy from './../../assets/puppy.png'

function Banner() {
  return <Image src={puppy} fluid/>;
}

export default Banner;