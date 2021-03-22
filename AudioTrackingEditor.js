import React, {useEffect, useState} from 'react';
import {CompositeDecorator, Editor, EditorState, Modifier, SelectionState} from 'draft-js';
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


const AudioTrackingHighlight = (props) => {
    return (
        <i style={styles.highlight} data-offset-key={props.offsetKey}>
            {props.children}
        </i>
    );
}

export const AudioTrackingEditor = ({audioProgress, audioLength, text}) => {

    const compositeDecorator = new CompositeDecorator([
        {
            strategy: trackingStrategy,
            component: AudioTrackingHighlight,
        }
    ]);

    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(createFromText(text), compositeDecorator)
    );

    function trackingStrategy(contentBlock, callback, contentState) {

        if (isNaN((audioLength)) || isNaN(audioProgress)) {
            console.log('not ready yet');
            return
        }

        if (contentBlock.data.has('HIGHLIGHT')) {
            console.log('found block with HIGHLIGHT', contentBlock.getText());
            const textLength = contentState.getPlainText().length;
            callback(0, getPosition(audioProgress, audioLength, textLength));
        }
    }

    const forceRender = () => {
        let content = editorState.getCurrentContent();
        let newEditorState = EditorState.createWithContent(content, compositeDecorator);
        setEditorState(newEditorState);
    }

    const highlightText = () => {
        let currentContent = editorState.getCurrentContent();
        let textLength = currentContent.getPlainText().length;
        let audioPosition = getPosition(audioProgress, audioLength, textLength);

        let newData = new Map();
        newData.set('HIGHLIGHT', true)

        let characterCount = 0;
        let blockSize = editorState.getCurrentContent().getBlockMap().size;
        let state = editorState.getCurrentContent();
        let selection = editorState.getSelection();

        editorState.getCurrentContent()
            .getBlockMap()
            .forEach(block => {
                let blockTextLength = block.getText().length;
                let blockStyle = 'unstyled';

                if (audioPosition > characterCount && audioPosition <= (characterCount + blockTextLength + blockSize - 1)) {
                    blockStyle = 'blockquote';
                }
                characterCount += blockTextLength;

                if (block.getType() !== blockStyle) {
                    state = Modifier.setBlockType(
                        state,
                        SelectionState.createEmpty(block.getKey()),
                        blockStyle
                    );
                }

            })

        let styledState = EditorState.push(editorState, state, 'change-block-data', false);
        let newEditorState = EditorState.forceSelection(styledState, selection)
        setEditorState(newEditorState);
    }

    useEffect(() => highlightText(), [audioProgress]);

    const myBlockStyleFn = (contentBlock) => {
        const type = contentBlock.getType();
        if (type === 'blockquote') {
            return 'superFancyBlockquote';
        }
    }

    return (
        <div style={styles.root}>
            <div>{audioProgress} / {audioLength}</div>
            <div style={styles.editor}>
                <Editor editorState={editorState}
                        blockStyleFn={myBlockStyleFn}
                        onChange={setEditorState}/>
            </div>
        </div>
    );
}