// import React from 'react'
//
// const ButtonOnClickSound = () => {
//     const context = new window.AudioContext();
//     const playFile = (filepath) => {
//         fetch(filepath)
//             .then(response => response.arrayBuffer())
//             .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
//             .then(audioBuffer => {
//                 const soundSource = context.createBufferSource();
//                 soundSource.buffer = audioBuffer;
//                 soundSource.connect(context.destination);
//                 soundSource.start();
//             });
//     }
//
//     const playSound = () => {
//         playFile('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3');
//     }
//     return (
//         <div onClick={playSound}>23</div>
//     )
// }
//
// export default ButtonOnClickSound