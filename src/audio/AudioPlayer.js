import React, {useState} from 'react';

const soundFile = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg";

const initialAudioState = {
    length: 0,
    position: 0
};

export const AudioPlayer = () => {
    const [playerState, setPlayerState] = useState(initialAudioState);

    /* fires when data has been loaded and the audio player knows what's what */
    const handleLoadedMetadata = (evt) => setPlayerState({...playerState, length: evt.target.duration });

    /* fires when the playing time has updated due to playing the audio or seeking */
    const handleTimeUpdate = (evt) => setPlayerState({ ...playerState, position: evt.target.currentTime });

    return (
        <div>
            <audio
                controls
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}>
                <source src={soundFile} type="audio/ogg" />
            </audio>

            <div>Length: {playerState.length}</div>
            <div>Position: {playerState.position}</div>
        </div>
    );
};