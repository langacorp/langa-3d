# langa-3d

Seven small pieces pulled out of a React Three Fiber project: hooks for making
3D objects interactive, two GPU shaders, and a base material.

No scene, no models, no brand. Each file is standalone and does one thing.

Published by **LANGA Corporation S.r.l.** under the MIT licence.

## What is here

| File | Lines | What it does |
|---|---|---|
| `hooks/useInteractionManager.js` | 30 | holds hover and click state for a whole scene, so each object stays dumb |
| `hooks/useInteractiveModel.js` | 53 | turns that state into the flags one object needs: hovered, full colour, outline |
| `hooks/useInteractiveMaterial.js` | 36 | one material whose map and emissive intensity follow the state |
| `hooks/useMaterialStatesave.js` | 30 | builds two materials from one base, plain and textured, to switch between |
| `shaders/simulationMaterial.js` | 61 | GPGPU particle simulation on a float texture |
| `shaders/dofPointsMaterial.js` | 41 | depth-of-field point rendering for those particles |
| `materials/baseMaterial.js` | 10 | a configured `MeshStandardMaterial` starting point |

The line counts above are checked on every push against the files themselves,
so they cannot quietly stop being true. See `claims.json`.

**One name to watch:** `useMaterialStatesave.js` exports `useMaterialState`.
The file name keeps its original spelling rather than break existing imports.

## Requirements

`three`, `@react-three/fiber`, and React. Nothing else.

Copy the files you need. There is no package to install: seven files are not
worth a dependency.

## Use

Copy what you need. The imports below assume `hooks/`, `shaders/` and
`materials/` stay next to each other, as they are here.

**One manager, many objects.** `useInteractionManager` holds hover and click
state for a whole scene, so each object stays dumb:

```jsx
const m = useInteractionManager()

<Tag
  onPointerOver={() => m.handleTagHover("mars", true)}
  onPointerOut={() => m.handleTagHover("mars", false)}
  onClick={() => m.handleTagClick("mars")}
  active={m.isTagActive("mars")}
  hovered={m.isTagHovered("mars")}
/>
```

`resetActiveTag()` clears the selection: call it when a modal closes.

**Wiring one object to that state.** `useInteractiveModel` takes the tag id and
the manager callback, and returns the flags a mesh needs:

```jsx
const {
  shouldAppearHovered, isFullColor, enableOutline,
  onMouseEnterTag, onMouseLeaveTag,
} = useInteractiveModel(
  "mars",
  m.isTagActive("mars"),
  isModalScrolledToEnd,
  completedContentTags,   // { mars: true } stays full colour for good
  m.handleTagHover,
)
```

**Two ways to handle the material, and you pick one.**

`useMaterialState` builds a plain material and a textured one from the same
base, so a hover swaps between them instead of rebuilding either:

```jsx
const { defaultMaterial, customMaterial } = useMaterialState(
  { map, normalMap, emissiveMap },
  { defaultMaterialProps: { roughness: 0.4 } },
)
```

`useInteractiveMaterial` is the other approach: a single material whose map and
emissive intensity follow the state.

```jsx
const material = useInteractiveMaterial({
  isHovered, isFullColor, textures: { colorMap },
})
```

Do not use both on the same mesh.

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
