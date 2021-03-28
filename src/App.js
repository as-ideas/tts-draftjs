import React from 'react';
import {AudioPlayer} from './audio/AudioPlayer';
import {DarkModeEditor} from './darkmode/DarkModeEditor';
import {AudioTrackingExample} from './audioTracking/AudioTrackingExample';

export const App = () => {

    return (
        <main>
            <div>
                <h1>The Audio player</h1>
                <AudioPlayer/>
            </div>

            <div>
                <h1>The Dark Mode Editor</h1>
                <DarkModeEditor/>
            </div>

            <div>
                <h1>Audio tracking example</h1>
                <AudioTrackingExample/>
            </div>
        </main>
    )
}