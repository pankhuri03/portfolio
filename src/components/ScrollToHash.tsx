import { useEffect } from 'react'
import { useLocation } from 'react-router'

function ScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return

    const element = document.getElementById(
      decodeURIComponent(hash.slice(1))
    )

    element?.scrollIntoView({ behavior: 'smooth' })
  }, [pathname, hash, key])

  return null
}

export default ScrollToHash