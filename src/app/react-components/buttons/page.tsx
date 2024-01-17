import React from 'react'

import Button from '@/components/Common/Button'
import Typography from '@/components/Common/Typography'

const page = () => {
  return (
    <div className='container'>
      <Typography variant='h3' size='display-sm'>
        Buttons Primary
      </Typography>
      <div className='mb-2'>
        <Button variant='primary' size='small'>
          Hello world
        </Button>
        <Button variant='primary' size='medium'>
          Hello world
        </Button>
        <Button variant='primary' size='large'>
          Hello world
        </Button>
      </div>
      <Typography variant='h3' size='display-sm'>
        Buttons secondary
      </Typography>
      <div className='mb-2'>
        <Button variant='secondary' size='small'>
          Hello world
        </Button>
        <Button variant='secondary' size='medium'>
          Hello world
        </Button>
        <Button variant='secondary' size='large'>
          Hello world
        </Button>
      </div>
      <Typography variant='h3' size='display-sm'>
        Buttons outlined primary
      </Typography>
      <div className='mb-2'>
        <Button variant='outlined' size='small' outlineColor='primary'>
          Hello world
        </Button>
        <Button variant='outlined' size='medium' outlineColor='primary'>
          Hello world
        </Button>
        <Button variant='outlined' size='large' outlineColor='primary'>
          Hello world
        </Button>
      </div>
      <Typography variant='h3' size='display-sm'>
        Buttons outlined secondary
      </Typography>
      <div className='mb-2'>
        <Button variant='outlined' size='small' outlineColor='secondary'>
          Hello world
        </Button>
        <Button variant='outlined' size='medium' outlineColor='secondary'>
          Hello world
        </Button>
        <Button variant='outlined' size='large' outlineColor='secondary'>
          Hello world
        </Button>
      </div>

      <h1>Buttons with Link</h1>
      <Typography variant='h3' size='display-sm'>
        Buttons Primary
      </Typography>
      <div className='my-8'>
        <Button variant='primary' size='small' href='#'>
          Hello world
        </Button>
        <Button variant='primary' size='medium' href='#'>
          Hello world
        </Button>
        <Button variant='primary' size='large' href='#'>
          Hello world
        </Button>
      </div>
      <Typography variant='h3' size='display-sm'>
        Buttons secondary
      </Typography>
      <div className='my-4'>
        <Button variant='secondary' size='small' href='#'>
          Hello world
        </Button>
        <Button variant='secondary' size='medium' href='#'>
          Hello world
        </Button>
        <Button variant='secondary' size='large' href='#'>
          Hello world
        </Button>
      </div>
      <Typography variant='h3' size='display-sm'>
        Buttons outlined primary
      </Typography>
      <div className='my-8'>
        <Button variant='outlined' size='small' outlineColor='primary' href='#'>
          Hello world
        </Button>
        <Button
          variant='outlined'
          size='medium'
          outlineColor='primary'
          href='#'>
          Hello world
        </Button>
        <Button variant='outlined' size='large' outlineColor='primary' href='#'>
          Hello world
        </Button>
      </div>
      <Typography variant='h3' size='display-sm'>
        Buttons outlined secondary
      </Typography>
      <div className='mt-4'>
        <Button
          variant='outlined'
          size='small'
          outlineColor='secondary'
          href='#'>
          Hello world
        </Button>
        <Button
          variant='outlined'
          size='medium'
          outlineColor='secondary'
          href='#'>
          Hello world
        </Button>
        <Button
          variant='outlined'
          size='large'
          outlineColor='secondary'
          href='#'>
          Hello world
        </Button>
      </div>
    </div>
  )
}

export default page
