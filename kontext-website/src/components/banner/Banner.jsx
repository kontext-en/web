import React from 'react'
import { Card } from 'react-bootstrap';

function Banner({img, children, className}) {
  return <Card className={className}>
    <Card.Img src={img.src} alt={img.alt} style={{maxHeight:'calc(100vh - 7rem)', objectFit: 'cover'}}/>
    {children&&<Card.ImgOverlay style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      {children}
    </Card.ImgOverlay>}
  </Card>
}

export default Banner;