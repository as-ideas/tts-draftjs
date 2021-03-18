import {CompositeDecorator, Editor, EditorState} from 'draft-js';
import React, {useEffect, useState} from 'react';
import {createFromText} from 'draft-js/lib/ContentState';

const soundFile = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg";
const text = "This is an example sound file in org vorbis format from wikipedia the free encyclopedia";
const initialAudioState = {
    length: 0,
    position: 0
};

const AudioTrackingHighlight = (props) => {
    return (
        <i style={{background:'lightgreen'}} data-offset-key={props.offsetKey}>
            {props.children}
        </i>
    );
}

export const getPosition = (audioPosition, audioLength, textLength) => {
    const audioProgressPercentage = (audioPosition / audioLength) * 100;
    return Math.ceil(textLength * audioProgressPercentage / 100);
}

export const OnlineExample = () => {
    const [playerState, setPlayerState] = useState(initialAudioState);
    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(createFromText(text), compositeDecorator)
    );

    const handleLoadedMetadata = (evt) => {
        setPlayerState({length: evt.target.duration, position: evt.target.currentTime });
    }
    const handleTimeUpdate = (evt) => {
        setPlayerState({ ...playerState, position: evt.target.currentTime });
    }

    const trackingStrategy = (contentBlock, callback, contentState) => {
        if (isNaN(playerState.position) || isNaN(playerState.length)) {
            return; /* not ready yet */
        }
        const charCount = contentBlock.getText().length;
        let position = getPosition(playerState.position, playerState.length, charCount);
        callback(0, position);
    }

    const compositeDecorator = new CompositeDecorator([{
            strategy: trackingStrategy,
            component: AudioTrackingHighlight,
        }]);

    const forceRender = () => {
        let content = editorState.getCurrentContent();
        let newEditorState = EditorState.createWithContent(content, compositeDecorator);
        setEditorState(newEditorState);
    }

    useEffect(() => forceRender(), [playerState.position])

    return (
        <div>
            <audio
                controls
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}>
                <source src={soundFile} type="audio/ogg" />
            </audio>

            <Editor editorState={editorState} onChange={setEditorState} />
        </div>
    );
};