// src/hooks/useInteractiveMaterial.js
import { useMemo, useEffect } from "react"
import { DoubleSide } from "three"
import { createBaseMaterial } from "@/materials/baseMaterial"

// Valor de emissão no estado ativo, tirado do foguete.
const fullColorEmissiveIntensity = 2

// O hook foi simplificado, pois a lógica agora é fixa.
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

    // ATUALIZADO: Lógica de atualização EXATAMENTE igual à do foguete.
    if (shouldDisplayFullColor) {
      // Aplica o estado "Full Color"
      material.map = textures.colorMap
      material.emissiveIntensity = fullColorEmissiveIntensity
    } else {
      // Reverte para o estado "Base"
      material.map = null
      material.emissiveIntensity = 0.2
    }
    material.needsUpdate = true
  }, [material, isHovered, isFullColor, textures])

  return material
}
