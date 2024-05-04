import { EditorContent, useEditor } from '@tiptap/react'
import starterKit from '@tiptap/starter-kit'
import { uniqueId } from '@note-editor/tiptap-extension-unique-id'
import blockContainer from './extensions/blockContainer'
import './index.scss'

export default () => {
  const editor = useEditor({
    extensions: [
      starterKit.configure({
        document: false,
        hardBreak: false,
      }),
      uniqueId,
      blockContainer,
    ],
  })

  return (<EditorContent className="h-full bg-slate-50 m-0 p-4" editor={editor}></EditorContent>)
}
