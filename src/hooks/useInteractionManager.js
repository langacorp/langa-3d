import { useState, useCallback } from "react";

export function useInteractionManager() {
  // activeTagId: The ID of the tag that was clicked and opened the modal.
  const [activeTagId, setActiveTagId] = useState(null);
  // hoveredTagId: The ID of the tag currently being hovered over.
  const [hoveredTagId, setHoveredTagId] = useState(null);

  const handleTagHover = useCallback((tagId, isHovering) => {
    setHoveredTagId(isHovering ? tagId : null);
  }, []);

  const handleTagClick = useCallback((tagId) => {
    setActiveTagId(tagId); // Set the active tag for camera movement and modal control.
  }, []);

  const resetActiveTag = useCallback(() => {
    setActiveTagId(null);
  }, []);

  return {
    activeTagId,
    hoveredTagId,
    isTagActive: (tagId) => activeTagId === tagId,
    isTagHovered: (tagId) => hoveredTagId === tagId,
    handleTagHover,
    handleTagClick,
    resetActiveTag
  };
}