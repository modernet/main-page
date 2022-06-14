import React from 'react'
import { InlineWidget } from 'react-calendly';
import { Container } from './CalendlyElement';

export default function Calendly() {
  return (
    <>
      <Container>
        <InlineWidget 
        url="https://calendly.com/kai-warren/30min"
        style={{
          height: '300px',
          width: '300px'
        }}
        pageSettings={{
          backgroundColor: 'F2F2F2',
          primaryColor: 'F2B807',
        }}
        />
      </Container>
    </>
  )
}
