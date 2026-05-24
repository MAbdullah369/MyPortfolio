'use client'
import { useEffect } from 'react'

/**
 * useReveal — Intersection Observer hook that adds `.visible`
 * to every element with the `.reveal` class when it enters the viewport.
 *
 * HOW IT WORKS:
 * Elements start with opacity:0 + translateY(24px) via the `.reveal` CSS class.
 * Once they cross 15% of the viewport, `.visible` is added, triggering the
 * CSS transition that fades+slides them into place.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // fire once
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
