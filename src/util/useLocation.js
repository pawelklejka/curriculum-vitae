import { useState } from 'react'


export default function useLocation(currentLocation) {
    const [location, setLocation] = useState(currentLocation);

    const changeLocation = (newLocation) => setLocation(newLocation)

  return {
      location,
      changeLocation
    }
}
