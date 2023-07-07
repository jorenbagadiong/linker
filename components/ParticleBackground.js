import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

import particlesConfig from "./config/particles-config"

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])
  
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      params={particlesConfig}
    />
  )
}

export default ParticlesBackground
