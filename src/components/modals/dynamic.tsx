import { createResponsiveWrapper } from 'pushmodal'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Drawer, DrawerContent } from '@/components/ui/drawer'

export default createResponsiveWrapper({
  desktop: {
    Wrapper: Dialog,
    Content: DialogContent
  },
  mobile: {
    Wrapper: Drawer,
    Content: DrawerContent
  },
  breakpoint: 768
})
