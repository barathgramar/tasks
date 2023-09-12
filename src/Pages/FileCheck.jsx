// import React, { Component } from 'react';

// class ImageSelector extends Component {
//   constructor() {
//     super();
//     this.state = {
//       selectedImage: null,
//       imageOptions: [
//         { name: 'Image1' },
//         { name: 'Image2' },
//         { name: 'Image3' },
//       ],
//     };
//   }

//   handleImageChange = (event) => {
//     const selectedImageName = event.target.value;
//     const selectedImage = selectedImageName;
//     this.setState({ selectedImage });
//   };

//   render() {
//     const { selectedImage, imageOptions } = this.state;

//     const localpath=`E:\\Professional\\Images\\${selectedImage}`
//     return (
//       <div>
//         <h1>Image Selector</h1>
//         <select onChange={this.handleImageChange} value={selectedImage || ''}>
//           <option value="" disabled>
//             Select an image
//           </option>
//           {imageOptions.map((image, index) => (
//             <option key={index} value={image.name}>
//               {image.name}
//             </option>
//           ))}
//         </select>
//         <div>
//           {/* {selectedImage && ( */}
//             <img
//               src={require(`file://E:\\Professional\\Images\\Image2.jpg`)}
//               alt={localpath}
//               style={{ maxWidth: '100%' }}
//             />
//           {/* )} */}
//         </div>
//       </div>
//     );
//   }
// }

// export default ImageSelector;
