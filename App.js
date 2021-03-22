import React, {useState} from 'react';
import {AudioTrackingEditor} from './AudioTrackingEditor';
import sound from 'url:./astra.wav';

export const App = () => {

    const [audioProgress, setAudioProgress] = useState(0);
    const [audioLength, setAudioLength] = useState(0);
    const text = `Wer entschied wirklich, Astra Seeneka zu stoppen?
    Die massive Kritik am Impfstopp für Astra Seeneka konzentriert sich auf Gesundheitsminister Jens Spahn (CDU). Involviert waren aber auch das Kanzleramt und der Koalitionspartner SPD. Was geschah am Montag?
    Am Montag um 16 Uhr erreichte die schleppende deutsche Impfkampagne ihren bisher härtesten Rück-schlag: Die Bundesregierung setze die Corona-Impfung mit Astra Seeneka vorsorglich aus, verkündete Gesundheitsminister Jens Spahn (CDU).
    Eine Entscheidung mit dramatischen Konsequenzen. Die Verwirrung war groß. Der Ärger auch. Aus dem Blick geriet dabei allerdings, wie die Entscheidung, auszusetzen, tatzächlich zu-stande kam.`;

    return (
        <div>
            <div>
                <h1>Audio Player</h1>
                <audio controls
                       onTimeUpdate={(evt) => setAudioProgress(evt.target.currentTime|| 0)}
                       onLoadedMetadata={(evt) => setAudioLength(evt.target.duration || 0)}>
                    <source src={sound}/>
                </audio>
            </div>

            <div>
                <h1>Editor</h1>
                <AudioTrackingEditor audioProgress={audioProgress}
                                     audioLength={audioLength}
                                     text={text}/>
            </div>
        </div>
    )
};
