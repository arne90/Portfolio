import React, { useState, useEffect } from 'react';

export default function StarsAnimated() {
  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.round(Math.random() * 2000 - 20),
      y: Math.round(Math.random() * 800 - 50),
      size: Math.round(Math.random() * 20 + 15),
      baseO: Math.random() * 0.2
    });
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  };

  const getStyle = star => {
    const size = getRandomInt(1, 7);
    const color1 = getRandomInt(150, 255);
    const color2 = getRandomInt(140, 255);
    const color3 = getRandomInt(140, 245);
    const color4 = getRandomInt(0.1, 1);
    const styles = {
      position: 'absolute',
      top: star.y + 'px',
      left: star.x + 'px',
      width: size + 'px',
      height: size + 'px',
      background: 'rgba(' + color1 + ',' + color2 + ',' + color3 + ',' + color4 + ')',
      borderRadius: '50% 50%'
    };
    return styles;
  };

  return stars.map((item, index) => (
    <div style={getStyle(item)}>
      <span className="myStar3" />
    </div>
  ));
}
