import React from 'react'

import ComponentsNav from '@/components/Common/ComponentsNav/ComponentsNav'

type Props = {
  children: React.ReactNode
}
const layout = ({ children }: Props) => {
  return (
    <div>
      <ComponentsNav />
      {children}
    </div>
  )
}

export default layout
