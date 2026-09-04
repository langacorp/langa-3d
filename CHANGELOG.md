# Changelog

All notable changes to this project are recorded here.
Dates are the date of the commit, not of a release.

## 2026-09-04

- CITATION.cff: version and date match the release. Zenodo reads this file, so a
  stale version here is a stale version in the archived record. First release
  archived by Zenodo.

## 2026-08-30

- langa-3d: seven reusable pieces from the Galaxy 3D site

## 2026-08-31

- `useInteractiveMaterial.js` imported `@/materials/baseMaterial`, an alias that
  only resolves with a bundler configured for it. The README says to copy the
  files, so the import is now relative and the file works on its own.
- README: the row for `useMaterialStatesave.js` said the hook remembers a
  material's original values. It does not: it builds two materials from one base.
- The export is `useMaterialState`, the file is `useMaterialStatesave.js`. The
  file name is left alone so existing imports keep working, and said in the README.
- Comments translated to English.
- Added a Use section with an example for each hook.
- Line counts added to the table, and checked on every push by countdrift.
