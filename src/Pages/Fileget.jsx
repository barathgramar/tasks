// import React, { useState } from "react";
// import ReactPlayer from "react-player";

// const Fileget = () => {

//     const [selectedImage, setSelectedImage] = useState(null);
//     const [selectedImageName, setSelectedImageName] = useState(null);
//     const [local, setLocal] = useState("");
//     const videoUrl = `file:///E:/Professional/Comps/Videos/Video1.mp4`;
//     const fs = require('fs');
//     const path = require('path');

//     const imageOptions = [
//         { name: 'Image1' },
//         { name: 'Image2' },
//         { name: 'Image3' },
//     ]
//     const LocalPath = 'E:\\Professional\\Images\\'
//     const handleImageChange = (event) => {
//         setSelectedImageName(event.target.value);
//         const image = imageOptions.find(image => image.name === selectedImageName)
//         fs.stat(videoUrl, (err, stats) => {
//             if (err) {
//                 console.error('Error reading file metadata:', err);
//                 return;
//             }


//             const creationDate = stats.birthtime;
//             console.log('Creation Date:', creationDate);
//         });

//     };

//     return (
//         <div>
//             <h1>Image Selector</h1>
//             <select onChange={handleImageChange} value={selectedImage || ''}>
//                 <option value="" disabled>
//                     Select an image
//                 </option>
//                 {imageOptions.map((image, index) => (
//                     <option key={index} value={image.name}>
//                         {image.name}
//                     </option>
//                 ))}
//             </select>
//             <ReactPlayer
//                 className='react-player fixed-bottom'
//                 url={require(`file:///E:/Professional/Comps/Videos/Video1.mp4`)}
//                 width='100%'
//                 height='100%'
//                 controls={true}
//                 loop={true}
//             />
//         </div>
//     );
// }
// export default Fileget;