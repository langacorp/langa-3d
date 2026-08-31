// src/hooks/useInteractiveMaterial.js
import { useMemo, useEffect } from "react"
import { DoubleSide } from "three"
import { createBaseMaterial } from "../materials/baseMaterial"

// Emissive intensity in the active state.
const fullColorEmissiveIntensity = 2

// The logic is fixed: one material, two states.
export function useInteractiveMaterial({ isHovered, isFullColor, textures }) {
  const material = useMemo(() => {
    const baseMaterial = createBaseMaterial()
    baseMaterial.map = null
    baseMaterial.emissiveIntensity = 0.2
    baseMaterial.side = DoubleSide
    return baseMaterial
  }, [])

  useEffect(() => {
    const shouldDisplayFullColor = isHovered || isFullColor

    // The same update path in both directions, so a hover can always be undone.
    if (shouldDisplayFullColor) {
      // Full-colour state.
      material.map = textures.colorMap
      material.emissiveIntensity = fullColorEmissiveIntensity
    } else {
      // Back to the base state.
      material.map = null
      material.emissiveIntensity = 0.2
    }
    material.needsUpdate = true
  }, [material, isHovered, isFullColor, textures])

  return material
}
