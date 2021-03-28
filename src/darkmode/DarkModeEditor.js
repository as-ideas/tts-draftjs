import React, {useEffect, useState} from 'react';
import {Editor, EditorState, SelectionState, Modifier} from 'draft-js';

const toggleDarkMode = (darkModeEnabled, editorState) => {
    /* save the current selection to restore it after applying our dark mode */
    let originalSelection = editorState.getSelection();
    let contentState = editorState.getCurrentContent();

    let blockStyle = darkModeEnabled ? 'styled' : 'unstyled';

    /* now we go over all blocks, select each block and modify the style */
    editorState.getCurrentContent()
        .getBlockMap()
        .forEach(block => {
            const blockSelection = SelectionState.createEmpty(block.getKey());
            contentState = Modifier.setBlockType(contentState, blockSelection, blockStyle);
            EditorState.push(editorState, contentState, 'change-block-data');
        });

    /* merge our styling changes onto the existing editor state and reset the selection */
    let styledEditorState = EditorState.push(editorState, contentState, 'change-block-data');
    return EditorState.acceptSelection(styledEditorState, originalSelection);
}

export const DarkModeEditor = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    /* listen to the button change, apply the dark mode and inform draftjs to update the editorState */
    useEffect(() => {
        let newEditorState = toggleDarkMode(darkMode, editorState);
        handleOnChange(newEditorState);
    }, [darkMode]);

    /* will be called when things change, we can call it as well */
    const handleOnChange = (editorState) => setEditorState(editorState);
    const blockStyleHandler = (contentBlock) => {
        if (contentBlock.getType() === 'styled') return 'darkmode'; // 'darkmode' is the css class to apply
    }
    return <div>
            <button onClick={() => setDarkMode(!darkMode)}>toggle dark mode</button>
            <Editor editorState={editorState}
                    onChange={handleOnChange}
                    blockStyleFn={blockStyleHandler} // we use our own blockStyle render function
            />
        </div>;
}