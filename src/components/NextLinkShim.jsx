import React from 'react'

export default function NextLinkShim({ href, children, className, ...props }) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  )
}
