import { Box, ButtonBase } from '@gravis.finance/uikit'
import React from 'react'

import { CloseIcon } from '../Icons'
import { Modal } from '../Modal'
import { Button } from '../Button'

export const Trailer = (props: React.ComponentProps<typeof Button>) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button {...props} onClick={() => setOpen(true)}>
        Watch Trailer
      </Button>
      <Modal onOverlayClick={() => setOpen(false)} open={open}>
        <Box maxWidth="100%" width="max(840px, 84rem)" height="max(472.5px, 47.25rem)">
          <ButtonBase onClick={() => setOpen(false)} position="absolute" top={0} right={0} p="1rem">
            <CloseIcon />
          </ButtonBase>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/M9n4PnR0k8k?autoplay=1"
            title="Evervoid Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Modal>
    </>
  )
}
