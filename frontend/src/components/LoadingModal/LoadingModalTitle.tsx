import { Dialog } from '@headlessui/react';

export default function LoadingModalTitle({ children }: { children: string }) {
  return (
    <Dialog.Title className="text-base">{children}</Dialog.Title>
  )
}