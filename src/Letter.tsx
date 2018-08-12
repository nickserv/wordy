import * as React from 'react'
import './Letter.css'

export default (
  props: { children: string } & React.HTMLAttributes<HTMLDivElement>
) => (
  <div
    className="letter"
    style={props.onClick && { cursor: 'pointer' }}
    {...props}
  />
)
