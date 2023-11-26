import React from 'react';
import Slider from 'react-image-slider';

const SwapingImages = () => {
  const images = [
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=2048x2048&w=is&k=20&c=jYvZBb0GJWw5Hife-3PFFNpWmkFskLui99SdQDbdHfI=',
    'https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=2048x2048&w=is&k=20&c=jYvZBb0GJWw5Hife-3PFFNpWmkFskLui99SdQDbdHfI=',
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=2048x2048&w=is&k=20&c=jYvZBb0GJWw5Hife-3PFFNpWmkFskLui99SdQDbdHfI=',
    'https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=2048x2048&w=is&k=20&c=jYvZBb0GJWw5Hife-3PFFNpWmkFskLui99SdQDbdHfI=',
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=2048x2048&w=is&k=20&c=jYvZBb0GJWw5Hife-3PFFNpWmkFskLui99SdQDbdHfI=',
    'https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=2048x2048&w=is&k=20&c=jYvZBb0GJWw5Hife-3PFFNpWmkFskLui99SdQDbdHfI=',
  ];

  return (
    <Slider images={images} isInfinite delay={5000}>
      {images.map((image, key) => (
        <div key={key}>
          <img src={image} alt="lsf" />
        </div>
      ))}
    </Slider>
  );
};

export default SwapingImages;
