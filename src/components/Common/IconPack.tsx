'use client'
import dynamic from 'next/dynamic'

export default function IconPack({ icon, ...rest }: any) {
  const DynamicHeader = dynamic(
    () => import(`@/components/Common/Icons/${icon}`),
    {
      loading: () => <p>Loading...</p>,
    }
  )
  return <DynamicHeader {...rest} />
}
