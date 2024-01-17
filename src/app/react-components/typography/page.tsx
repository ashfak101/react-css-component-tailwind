import React from 'react'

import Typography from '@/components/Common/Typography'

const page = () => {
  return (
    <div className='container'>
      <Typography variant='h1' size='display-2xl' classNames='text-primary-500'>
        hello world // display-2xl
      </Typography>
      <Typography variant='h2' size='display-lg' classNames='text-primary-500'>
        hello world // display-lg
      </Typography>
      <Typography variant='h3' size='display-md' classNames='text-primary-500'>
        hello world // display-md
      </Typography>
      <Typography variant='h4' size='display-sm' classNames='text-primary-500'>
        hello world // display-sm
      </Typography>
      <Typography variant='h5' size='lg' classNames='text-primary-500'>
        hello world // lg
      </Typography>
      <Typography variant='h6' size='md' classNames='text-primary-500'>
        hello world // md
      </Typography>
      <Typography variant='p' size='sm' classNames='text-primary-500'>
        hello world // sm
      </Typography>
      <Typography variant='span' size='xs' classNames='text-primary-500'>
        hello world // xs
      </Typography>
    </div>
  )
}

export default page
