import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button/Button'
import CloseIcon from '../Icon/CloseIcon'

type ModalProps = {
  onClose: () => void
  title: string
  children: ReactNode
}

const modalRoot = document.getElementById('modal-root')!

function Modal({ onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="modal-title"
      className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none bg-transparent p-0 backdrop:bg-black/50"
    >
      <div
        className="flex h-full w-full items-end justify-center sm:items-center sm:p-6"
        onClick={handleBackdropClick}
      >
        <div className="flex w-full flex-col rounded-t-2xl bg-surface p-5 shadow-card sm:max-w-lg sm:rounded-2xl sm:p-6">
          <div className="mx-auto mb-4 h-1 w-10 shrink-0 rounded-full bg-border sm:hidden" />

          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 id="modal-title" className="text-xl font-bold text-text">
              {title}
            </h2>
            <Button
              variant="plain"
              aria-label="Close"
              onClick={onClose}
              className="size-8 shrink-0 rounded-md transition-colors hover:bg-surface-alt"
            >
              <CloseIcon aria-hidden="true" className="size-5" />
            </Button>
          </div>

          {/* relative: anchors DateField's centered calendar overlay */}
          <div className="relative">{children}</div>
        </div>
      </div>
    </dialog>,
    modalRoot,
  )
}

export default Modal
