import { Dialog } from '@headlessui/react';

export default function LoadingModalDesc({ children }: { children: string }) {
  return (
    <Dialog.Description className="text-base">{children}</Dialog.Description>
  )
}