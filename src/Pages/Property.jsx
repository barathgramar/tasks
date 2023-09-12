import React from 'react';

function FileProperties() {

const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const { name, size, type, lastModifiedDate } = file;
      console.log('File Name:', name);
      console.log('File Size:', size);
      console.log('File Type:', type);
      console.log('Created Date:',new Date(lastModifiedDate))
    }
  };
  

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default FileProperties;
