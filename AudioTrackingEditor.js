import React, {useEffect, useState} from 'react';
import {Editor, EditorState, Modifier, SelectionState} from 'draft-js';
import {createFromText} from 'draft-js/lib/ContentState';

const getPosition = (audioPosition, audioLength, textLength) => {
    const audioProgressPercentage = (audioPosition / audioLength) * 100;
    return Math.ceil(textLength * audioProgressPercentage / 100);
}

const styles = {
    root: {
        fontFamily: '\'Georgia\', serif',
        fontSize: 14,
        padding: 20,
        width: 600,
    },
    editor: {
        borderTop: '1px solid #ddd',
        cursor: 'text',
        fontSize: 16,
        marginTop: 20,
        minHeight: 400,
        paddingTop: 20,
    },
    highlight: {
        background: '#dfdfdf'
    }
}

export const AudioTrackingEditor = ({audioProgress, audioLength, text}) => {

    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(createFromText(text))
    );

    const highlightText = () => {
        let currentContent = editorState.getCurrentContent();
        let selection = editorState.getSelection();
        let textLength = currentContent.getPlainText().length;
        let audioPosition = getPosition(audioProgress, audioLength, textLength);

        let characterCount = 0;
        let blockSize = editorState.getCurrentContent().getBlockMap().size;
        let state = editorState.getCurrentContent();

        editorState.getCurrentContent()
            .getBlockMap()
            .forEach(block => {
                let blockTextLength = block.getText().length;
                let blockStyle = 'unstyled';

                if (audioPosition > characterCount && audioPosition <= (characterCount + blockTextLength + blockSize - 1)) {
                    blockStyle = 'styled';
                }
                characterCount += blockTextLength;

                if (block.getType() !== blockStyle) {
                    state = Modifier.setBlockType(
                        state,
                        SelectionState.createEmpty(block.getKey()),
                        blockStyle
                    );
                }
            });

        let styledState = EditorState.push(editorState, state, 'change-block-data', false);
        let updateState = EditorState.acceptSelection(styledState, selection);
        onEditorChange(updateState);
    }

    useEffect(() => highlightText(), [audioProgress]);

    const myBlockStyleFn = (contentBlock) => {
        const type = contentBlock.getType();
        if (type === 'styled') {
            return 'superFancyBlockquote';
        }
    }
    const onEditorChange = (newState) => {
        setEditorState(newState);
    }

    return (
        <div style={styles.root}>
            <div>{audioProgress} / {audioLength}</div>
            <div style={styles.editor}>
                <Editor editorState={editorState}
                        blockStyleFn={myBlockStyleFn}
                        onChange={onEditorChange}/>
            </div>
        </div>
    );
}