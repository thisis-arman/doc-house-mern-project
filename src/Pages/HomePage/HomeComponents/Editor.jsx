import EditorJS from "@editorjs/editorjs";
import  Header  from "@editorjs/header";
import { useEffect } from "react";
import { useRef } from "react";

const DEFAULT_INITIAL_DATA =  {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "This is my awesome editor!",
          "level": 1
        }
      },
    ]
}
const Editor = () => {
    const ejInstance = useRef();
    const initEditor = () => {
        const editor = new EditorJS({
           holder: 'editorjs',
           onReady: () => {
             ejInstance.current = editor;
           },
           autofocus: true,
           data: DEFAULT_INITIAL_DATA,
           onChange: async () => {
             let content = await editor.saver.save();
 
             console.log(content);
           },
           tools: { 
             header: Header, 
           },
         });
       };
       useEffect(() => {
        if (ejInstance.current === null) {
          initEditor();
        }
    
        return () => {
          ejInstance?.current?.destroy();
          ejInstance.current = null;
        };
      }, []);
    return (
        <div className="border-2 h-96 mx-auto w-96" id='editorjs'>
            
        </div>
    );
};

export default Editor;