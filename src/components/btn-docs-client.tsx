'use client'

import { Button } from '@/components/ui/button'
import { pushModal } from '@/components/modals'

const BtnDocsClient = () => {
  return (
    <Button
      className='h-auto select-none py-1 font-mono'
      onClick={() => pushModal('documentation')}
    >
      Documentation
    </Button>
  )
}

export { BtnDocsClient }
