# langa-3d

Seven small pieces pulled out of a React Three Fiber project: hooks for making
3D objects interactive, two GPU shaders, and a base material.

No scene, no models, no brand. Each file is standalone and does one thing.

Published by **LANGA Corporation S.r.l.** under the MIT licence.

## What is here

| File | What it does |
|---|---|
| `hooks/useInteractionManager.js` | tracks hover and click state across many objects at once |
| `hooks/useInteractiveModel.js` | wires a loaded model to that state |
| `hooks/useInteractiveMaterial.js` | swaps material properties on hover without rebuilding the material |
| `hooks/useMaterialStatesave.js` | remembers a material's original values so a hover can be undone |
| `shaders/simulationMaterial.js` | GPGPU particle simulation on a float texture |
| `shaders/dofPointsMaterial.js` | depth-of-field point rendering for those particles |
| `materials/baseMaterial.js` | a configured `MeshStandardMaterial` starting point |

## Requirements

`three`, `@react-three/fiber`, and React. Nothing else.

Copy the files you need. There is no package to install: seven files are not
worth a dependency.

## Where this comes from

These files were written for the 3D site of the **LANGA Galaxy** — a WebGL
world built with Three.js and Next.js, where every service of the ecosystem is
a place you can fly to. The scene itself is not open source: it is a product.
What is here is the part that was general enough to be useful to anyone
building interactive 3D on the web.

The Galaxy and some of what it holds:

- [LANGA](https://langa.tv) — the ecosystem
- [LANGA Studios](https://studios.langa.tv) — strategy, branding, platforms
- [TreeD](https://treed.langa.tv) — photorealistic renders, 3D tours, animation
- [eFruit](https://efruit.langa.tv) — food marketplace for local producers

See [How we work](https://about.langa.tv/how-we-work/).

## Licence

MIT — see LICENSE. Copyright LANGA Corporation S.r.l.
