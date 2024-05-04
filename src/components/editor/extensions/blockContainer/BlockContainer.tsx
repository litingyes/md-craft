import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import { useState } from 'react'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <NodeViewWrapper className="relative pl-8" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <button
        className="absolute left-1 top-0 flex transition-colors justify-center items-center size-6 rounded-md p-0 border-none hover:bg-gray-200 cursor-grab"
        style={{
          display: visible ? 'flex' : 'none',
        }}
      >
        <span className="icon-[ic--outline-drag-indicator] size-4"></span>
      </button>
      <NodeViewContent />
    </NodeViewWrapper>
  )
}
