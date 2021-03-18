import React, {useState} from 'react';
import {CompositeDecorator, Editor, EditorState} from 'draft-js';

const styles = {
    highlight: {
        background:'#dfdfdf'
    }
}
/* the strategy that tells draftjs what to wrap in the component */
const findFirstHalfOfText = (contentBlock, callback, contentState) =>
    callback(0, Math.ceil(contentBlock.getText().length / 2))

/* the reactjs component that draftjs is going to use to wrap what the strategy returned */
const HighlightComponent = (props) =>
    <em style={styles.highlight} data-offset-key={props.offsetKey}> {props.children} </em>

/* the actual decorator connecting the dots */
const compositeDecorator = new CompositeDecorator([{
        strategy: findFirstHalfOfText,
        component: HighlightComponent,
    }]);

/* and here the actual editor using our custom decorator */
export const MyEditor = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(compositeDecorator));
    return <Editor editorState={editorState} onChange={setEditorState}/>;
}