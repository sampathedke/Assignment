
import React, { useState } from 'react';
import { Card, CardContent, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Gallery = () => {
  const [images, setImages] = useState([
    // Initial existing images (placeholders or default images)
    { id: 1, src: 'https://via.placeholder.com/150/FF69B4/000000?text=Flower+1', alt: 'Flower 1' },
    { id: 2, src: 'https://via.placeholder.com/150/FF1493/000000?text=Flower+2', alt: 'Flower 2' },
  ]);

  const handleAddImage = (event) => {
    const files = event.target.files;
    if (files && files[0]) {
      const newImage = {
        id: Date.now(),
        src: URL.createObjectURL(files[0]),
        alt: files[0].name,
      };
      setImages([...images, newImage]);
    }
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <Card className="shadow-lg rounded-lg bg-green-200 p-3">
      <CardContent className='bg-zinc-400'>
        <h2 className="text-lg font-semibold mb-4 cursor-pointer underline text-white">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative">
              <img src={image.src} alt={image.alt} className="w-full h-32 object-cover rounded" />
              <IconButton
                onClick={() => handleDeleteImage(image.id)}
                className="absolute top-0 right-0 text-red-600"
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleAddImage}
          className="mt-4"
        />
      </CardContent>
    </Card>
  );
};

export default Gallery;
