import React, { useState } from 'react'

export default function usePopout() {
    const [isShowing, setIsShowing] = useState(true);

    const toggle = () => setIsShowing(!isShowing)

  return {
      isShowing,
      toggle
  }
}
