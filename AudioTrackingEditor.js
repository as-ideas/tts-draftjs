import React, {useEffect, useState} from 'react';
import {CompositeDecorator, Editor, EditorState} from 'draft-js';
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
        background:'#dfdfdf'
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
        const charCount = contentBlock.getText().length;
        callback(0, getPosition(audioProgress, audioLength, charCount));
    }

    const forceRender = () => {
        let content = editorState.getCurrentContent();
        let newEditorState = EditorState.createWithContent(content, compositeDecorator);
        setEditorState(newEditorState);
    }

    useEffect(() => forceRender(), [audioProgress])

    return (
        <div style={styles.root}>
            <div>{audioProgress} / {audioLength}</div>
            <div style={styles.editor}>
                <Editor editorState={editorState} onChange={setEditorState} />
            </div>
        </div>
    );
}