import React, {useMemo, useState} from 'react';
import Editor from '@draft-js-plugins/editor';
import {EditorState} from 'draft-js';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';

import '@draft-js-plugins/inline-toolbar/lib/plugin.css';
import getFragmentFromSelection from 'draft-js/lib/getFragmentFromSelection';

const AraButton = (props) => {

    const clickHandler = (ev) => {
        ev.preventDefault();
        const selection = getFragmentFromSelection(props.getEditorState());
        console.log(selection.map(s => s.getText()).join());
    }

    return (
        <button onMouseDown={(event) => event.preventDefault()}
                onClick={clickHandler}>Ara</button>
    )
}


export const ContextMenuEditor = () => {
    const [plugins, InlineToolbar] = useMemo(() => {
        const inlineToolbarPlugin = createInlineToolbarPlugin();
        return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar];
    }, []);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const handleOnChange = (editorState) => setEditorState(editorState);
    return <div>
        <Editor editorState={editorState}
                onChange={handleOnChange}
                plugins={plugins}
        />
        <InlineToolbar>
            {
                (externalProps) => (
                    <>
                    <AraButton {...externalProps} />
                    </>
                )
            }
        </InlineToolbar>
    </div>;
}