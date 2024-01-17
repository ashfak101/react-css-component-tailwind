import React from 'react'

import IconPack from '@/components/Common/IconPack'
import Typography from '@/components/Common/Typography'
import { getTsxFilesNameOnly } from '@/utils/methods/gettsx'

const page = async () => {
  const _res = await getTsxFilesNameOnly('src/components/Common/Icons')
  const icons = _res.filter((icon) => icon !== 'index')

  return (
    <div className='container'>
      <div className='grid grid-cols-8 gap-3'>
        {icons.map((icon) => {
          return (
            <div
              key={icon}
              className='flex flex-col items-center justify-center border '>
              <IconPack icon={icon} />
              <Typography
                variant='h3'
                size='md'
                classNames='text-primary-500'
                weight='medium'>
                {icon}
              </Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page
