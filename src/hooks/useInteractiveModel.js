import { useState, useCallback } from "react"

export const useInteractiveModel = (
  tagId,
  isActiveTag,
  isModalScrolledToEnd,
  completedContentTags,
  handleTagHover
) => {
  const [isMouseHovered, setIsMouseHovered] = useState(false)

  const isPermanentlyFullColor = completedContentTags[tagId]
  const isCurrentlyFullColorBasedOnModal = isActiveTag && isModalScrolledToEnd

  const shouldAppearHovered = isMouseHovered || isActiveTag
  const isFullColor =
    isPermanentlyFullColor || isCurrentlyFullColorBasedOnModal || isMouseHovered
  const enableOutline =
    isMouseHovered && !isActiveTag && !isPermanentlyFullColor

  const onMouseEnterTag = useCallback(() => {
    handleTagHover(tagId, true)
    setIsMouseHovered(true)
  }, [tagId, handleTagHover])

  const onMouseLeaveTag = useCallback(() => {
    handleTagHover(tagId, false)
    setIsMouseHovered(false)
  }, [tagId, handleTagHover])

  const getMaterialState = (defaultMaterial, customMaterial) => {
    if (isPermanentlyFullColor || isFullColor) {
      return {
        material: customMaterial,
        needsUpdate: true,
      }
    }
    return {
      material: defaultMaterial,
      needsUpdate: true,
    }
  }

  return {
    isMouseHovered,
    shouldAppearHovered,
    isFullColor,
    enableOutline,
    onMouseEnterTag,
    onMouseLeaveTag,
    getMaterialState,
  }
}
