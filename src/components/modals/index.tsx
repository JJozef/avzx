'use client'

import { createPushModal } from 'pushmodal'

// Dynamic modal
import Dynamic from './dynamic'

// Modals
import { ModalDocumentation } from './documentation'

export const {
  pushModal,
  popModal,
  popAllModals,
  replaceWithModal,
  useOnPushModal,
  onPushModal,
  ModalProvider
} = createPushModal({
  modals: {
    documentation: {
      Wrapper: Dynamic.Wrapper,
      Component: ModalDocumentation
    }
  }
})
