
import React, { useEffect } from 'react';

const Product = () => {

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


  return (

   

      <ul className="grid grid-cols-1 gap-4 py-2 list-disc list-inside md:grid-cols-3">

<div id='surface00'></div>
      </ul>

  );
};


export default Product;
