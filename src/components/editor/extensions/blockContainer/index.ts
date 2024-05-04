import { blockContainer } from '@note-editor/tiptap-extension-block-container'
import { ReactNodeViewRenderer } from '@tiptap/react'
import BlockContainer from './BlockContainer'

export default blockContainer.extend({
  addNodeView() {
    return ReactNodeViewRenderer(BlockContainer, {
      stopEvent: () => false,
    })
  },
})
