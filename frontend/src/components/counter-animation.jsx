"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

export function CounterAnimation({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const countRef = useRef(null)

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now()
      const endValue = end

      if (countRef.current) {
        clearInterval(countRef.current)
      }

      countRef.current = setInterval(() => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        setCount(Math.floor(progress * endValue))

        if (progress === 1) {
          clearInterval(countRef.current)
        }
      }, 16)
    }

    return () => {
      if (countRef.current) {
        clearInterval(countRef.current)
      }
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
