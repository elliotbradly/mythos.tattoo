import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const loadShade = () => {

    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

        document.head.appendChild(script);
      });
    }

    // Usage:
    loadScript('./jsx/110.shade.js')
      .then(async () => {
        console.log('Script loaded successfully!');
        console.log("REALLY " + SHADE)

        var bit

        bit = await SHADE.hunt("[Write action] Write Surface", { idx: "surface00" })
        bit = await SHADE.hunt("[Read action] Read Container", { idx: "can-00" })

        var container = bit.canBit.dat.bit;

        bit = await SHADE.hunt("[Write action] Write Text", { idx: "txt00", dat: { txt: 'hi', can: 'can-00' } })
        var text = bit.txtBit.dat.bit
        container.addChild(text)

        bit = await SHADE.hunt("[Write action] Write Text", { idx: "txt01", dat: { y: 10, txt: 'hi', can: 'can-00' } })
        var text = bit.txtBit.dat.bit
        container.addChild(text)

        bit = await SHADE.hunt("[Write action] Write Text", { idx: "txt02", dat: { y: 30, txt: 'hi', can: 'can-00' } })
        var text = bit.txtBit.dat.bit
        container.addChild(text)

        // Now you can safely use functions/variables from the script
      })
      .catch(error => {
        console.error('Error loading script:', error);
      });

  }

  useEffect(() => {
    loadShade()
  }, []);


  const increment = () => {

    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };






  return (
    <div>




      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={loadShade}>Load Shade</button>
      <div id='surface00' />


    </div>
  );
}

export default Counter;
