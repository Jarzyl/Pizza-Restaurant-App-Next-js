import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Pizza from './Pizza';

const PizzaLoad = () => {

  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate/>
      <Stage environment="city" intensity={0.3}>
        <Pizza
        position={[0, 0, 0]} 
        rotation={[0.5, Math.PI / 2, 0]}/>
      </Stage>
    </Canvas>
  );
};

export default PizzaLoad;

// import React, { useRef, useImperativeHandle, forwardRef } from 'react';
// import { OrbitControls, Stage } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import Pizza from './Pizza';

// const PizzaLoad = forwardRef((props, ref) => {
//   const PizzaLoadRef = useRef();

//   useImperativeHandle(ref, () => ({
//     changePizzaColor: (newColor) => {
//       PizzaLoadRef.current.material.color.set(newColor);
//     }
//   }));

//   return (
//     <Canvas>
//       <OrbitControls enableZoom={false} autoRotate/>
//       <Stage environment="city" intensity={0.3}>
//         <Pizza ref={PizzaLoadRef} 
//         position={[0, 0, 0]} 
//         rotation={[0.5, Math.PI / 2, 0]}/>
//       </Stage>
//     </Canvas>
//   );
// });

// export default PizzaLoad;

