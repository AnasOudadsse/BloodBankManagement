"use client"

import { useToast } from "@chakra-ui/react"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-md shadow-lg p-4 min-w-[300px] max-w-md animate-in slide-in-from-right-full ${
            toast.variant === "destructive" ? "bg-red-600 text-white" : "bg-white text-gray-900 border"
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              {toast.title && <h3 className="font-medium">{toast.title}</h3>}
              {toast.description && <p className="text-sm mt-1">{toast.description}</p>}
            </div>
            <button onClick={() => dismiss(toast.id)} className="ml-4 text-sm opacity-70 hover:opacity-100">
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
