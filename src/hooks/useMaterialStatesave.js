// src/hooks/useMaterialState.js
import { useMemo } from "react"
import { MeshStandardMaterial, Color } from "three"

export const useMaterialState = (textures, options = {}) => {
  // Material PADRÃO (estado inicial)
  const defaultMaterial = useMemo(() => {
    return new MeshStandardMaterial({
      color: new Color(0x4eef3f), // Verde padrão
      roughness: 0.6,
      metalness: 0.2,
      ...options.defaultMaterialProps,
    })
  }, [options.defaultMaterialProps])

  // Material PERSONALIZADO (com texturas)
  const customMaterial = useMemo(() => {
    const material = defaultMaterial.clone()
    if (textures) {
      if (textures.map) material.map = textures.map
      if (textures.normalMap) material.normalMap = textures.normalMap
      if (textures.emissiveMap) material.emissiveMap = textures.emissiveMap
      // Adicione outras texturas conforme necessário
    }
    return material
  }, [defaultMaterial, textures])

  return { defaultMaterial, customMaterial }
}
