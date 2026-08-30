import { MeshStandardMaterial, Color, DoubleSide, NormalBlending } from "three"

export function createBaseMaterial() {
  return new MeshStandardMaterial({
    color: new Color(0xa1a1a1),
    // color: new Color(0xffb703),
    roughness: 0.6,
    metalness: 0.2,
  })
}
