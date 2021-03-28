import React, {useState} from 'react';
import {AudioTrackingEditor} from './AudioTrackingEditor';
import sound from 'url:./b5eaa837-633f-4ab0-a258-bfb6a6c08fbe.wav';

export const AudioTrackingExample = () => {

    const [audioProgress, setAudioProgress] = useState(0);
    const [audioLength, setAudioLength] = useState(0);
    const text = `Angesichts drastisch steigender Infektionszahlen mit dem Coronavirus schicken Bund und Länder ganz Deutschland über Ostern in den schärfsten Lockdown seit Beginn der Pandemie vor einem Jahr. Vom ersten bis einschließlich 5. April, also von Gründonnerstag bis Ostermontag, soll das öffentliche, private und wirtschaftliche Leben weitgehend heruntergefahren werden, um die dritte Welle der Pandemie zu brechen. Das beschlossen Bundeskanzlerin Angela Merkel (CDU) und die Mi­nis­ter­prä­si­den­t:in­nen der Länder in einer mehr als elfstündigen Marathonsitzung in der Nacht zum Dienstag.

Der seit mehr als drei Monaten geltende harte Lockdown zur Bekämpfung der Coronapandemie wird insgesamt um drei Wochen bis zum 18. April verlängert. Am 12. April soll darüber beraten werden, wie es danach weitergeht. „Wir haben das Virus noch nicht besiegen können, es lässt nicht locker“, begründete Merkel am frühen Dienstagmorgen die harten Maßnahmen.

Deutschland sei in einer sehr ernsten Lage mit exponentiell steigenden Fallzahlen, einer steigenden Belastung der Intensivstationen in den Kliniken und der Ausbreitung ansteckenderer Coronavirus-Varianten. Die Beschlüsse im Überblick:

Merkel nennt den besonders scharfen Lockdown über Ostern eine „Ruhepause“. Der Gründonnerstag und Karsamstag werden demnach einmalig als Ruhetage definiert und mit weitgehenden Kontaktbeschränkungen verbunden. „Es gilt damit an fünf zusammenhängenden Tagen das Prinzip #WirBleibenZuHause“, heißt es in dem Beschluss von Bund und Ländern. Nur am Karsamstag soll demnach der Lebensmittelhandel geöffnet bleiben.

Private Zusammenkünfte sollen auf den eigenen Haushalt und einen weiteren Hausstand, jedoch maximal fünf Personen beschränkt werden. Kinder bis 14 Jahre werden nicht mitgezählt. Paare mit getrennten Wohnungen gelten als ein Haushalt.

Ansammlungen im öffentlichen Raum werden dem Beschluss zufolge in dieser Zeit generell untersagt. Wo bereits Außengastronomie offen ist, muss sie für diese fünf Tage wieder geschlossen werden. Kirchen und Religionsgemeinschaft werden gebeten, an Ostern nur Online-Angebote für die Gläubigen zu machen. Nur Impf- und Testzentren sollen offen bleiben.

Die Anfang März vereinbarte „Notbremse“ bei mehr als 100 Neuinfektionen je 100.000 Ein­woh­ne­r:in­nen innerhalb von sieben Tagen soll konsequent umgesetzt werden. Öffnungsschritte sollen bei Erreichen der Marke zurückgenommen werden - am Dienstagmorgen lag sie laut Robert Koch-Institut bei 108,ersten

Die Landkreise sollen darüber hinaus aber auch weitere Maßnahmen ergreifen, wenn der Schwellenwert überschritten wird. Als Möglichkeit genannt werden in dem Beschluss unter anderem Ausgangsbeschränkungen, verschärfte Kontaktbeschränkungen und die Pflicht zu tagesaktuellen Schnelltests in Bereichen, in denen das Abstandhalten oder konsequente Maskentragen erschwert sind.

Die harten Maßnahmen sollen durch mehr Tests begleitet werden. Bund und Länder wollen Coronatests für Schüler:innen, Lehrkräfte und Kita-Beschäftigte ausweiten und streben „baldmöglichst zwei Testungen pro Woche“ an. Die Verteilung und Organisation läuft regional unterschiedlich gut, und über die praktische Umsetzung wird vielerorts noch diskutiert - beispielsweise über die Frage, ob die Tests zu Hause oder in der Schule stattfinden sollen.

Zur Organisation des weiteren Betriebs von Schulen und Kitas, etwa zu möglichen Schließungen oder anderen Einschränkungen, trafen Merkel und die Mi­nis­ter­prä­si­den­t:in­nen keine konkreten Vereinbarungen. Die Länder regeln diese Fragen damit weiterhin in Eigenregie.

Die landesregierung Nordrhein-Westfalen etwa hat bereits angekündigt, dass die Schulen und Kitas in Nordrhein-Westfalen bis zu den Osterferien geöffnet bleiben. Das sagte Ministerpräsident Armin Laschet (CDU) am frühen Dienstagmorgen in Düsseldorf nach rund zwölfstündigen Bund-Länder-Beratungen. Die Osterferien beginnen in NRW am 29. März und dauern bis 10. April.

Die CDU/FDP-Landesregierung hatte einzelnen Kommunen mit besonders hohen Infektionsraten aber erlaubt, den Präsenz-unterricht an weiterführenden Schulen bis Ostern einzuschränken und mehrere Jahrgänge wieder in den Distanzunterricht zu schicken.

Zudem soll für alle Flüge aus dem Ausland nach Deutschland eine generelle Testpflicht vor Abflug eingeführt werden. Bisher müssen nur Einreisende aus „Hochinzidenzgebieten“ mit besonders vielen Infektionen sowie aus Gebieten mit neuen Virusvarianten bei Einreise einen Test vorweisen. Kommt man aus einem „normalen“ Risikogebiet, muss man sich erst 48 Stunden nach Ankunft in Deutschland testen lassen, was sich schwer kontrollieren lässt.

Es gibt aber auch Gebiete in Europa, die gar nicht mehr auf der Risikoliste des RKI stehen, wie zum Beispiel Mallorca. Die neue Testpflicht zielt vor allem auf Ur­lau­be­r:in­nen ab, die von dort in den nächsten Wochen nach Deutschland zurückkehren. In der Osterzeit sollen es um die 40.000 sein.

Schleswig-Holstein, Niedersachsen, Mecklenburg-Vorpommern, Sachsen-Anhalt und Rheinland-Pfalz drangen darauf, ihren Bür­ge­r:in­nen Urlaub in Ferienwohnungen, Ferienhäusern, Appartements, Wohnwagen und Wohnmobilen möglich zu machen, sofern diese über eigene Sanitäreinrichtungen verfügen und auch das Essen in Eigenregie organisiert werden kann. Davon ist im Beschluss nichts mehr zu finden.

Die Bund-Länder-Runde zählte zu den schwierigsten seit Beginn der Pandemie. Dem Vernehmen nach zeigte sich Kanzlerin Merkel zwischenzeitlich sehr unzufrieden mit dem Verlauf. Stundenlang wurde die große Runde unterbrochen und in kleinem Kreise weiterverhandelt. Berlins Regierender Bürgermeister Michael Müller (SPD) sprach nach den Beratungen von einer „schweren Geburt“.

Auch der bayerische Ministerpräsident Markus Söder nannte die Verhandlungen schwierig, lobte aber auch den klaren Kurs, der gefunden worden sei. „Wir wissen, dass Corona bleischwer über dem Land liegt“, sagte er. Man habe es jetzt aber in der Hand, die dritte Welle schneller zu beenden als die vorherige. „Ungeduld darf nicht zu unserer Schwäche werden“, mahnte der C S U-Vorsitzende.`;

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
