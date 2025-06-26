import { useEffect, useState } from 'react'
import '../css/LoadingScreen.css'

export default function LoadingScreen({ onFinish }) {
  const [startAnimation, setStartAnimation] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartAnimation(true)
    }, 2000)

    const totalTimer = setTimeout(() => {
      setHide(true)
      onFinish?.()
    }, 3500)

    return () => {
      clearTimeout(delayTimer)
      clearTimeout(totalTimer)
    }
  }, [])

  return !hide ? (
    <div className="loading-screen">
      <div className={`curtain ${startAnimation ? 'curtainUp' : ''}`}>
        <div className="curtain-logo-container">
          <div className="curtain-semi-circle" />
          <div className="curtain-letter-p">P</div>
        </div>
      </div>
    </div>
  ) : null
}
