// The export is useMaterialState. The file name keeps its original spelling
// so existing imports do not break.
import { useMemo } from "react"
import { MeshStandardMaterial, Color } from "three"

export const useMaterialState = (textures, options = {}) => {
  // Default material: the initial state.
  const defaultMaterial = useMemo(() => {
    return new MeshStandardMaterial({
      color: new Color(0x4eef3f), // default green
      roughness: 0.6,
      metalness: 0.2,
      ...options.defaultMaterialProps,
    })
  }, [options.defaultMaterialProps])

  // Custom material: same base, with textures applied.
  const customMaterial = useMemo(() => {
    const material = defaultMaterial.clone()
    if (textures) {
      if (textures.map) material.map = textures.map
      if (textures.normalMap) material.normalMap = textures.normalMap
      if (textures.emissiveMap) material.emissiveMap = textures.emissiveMap
      // Add further maps here as needed.
    }
    return material
  }, [defaultMaterial, textures])

  return { defaultMaterial, customMaterial }
}
