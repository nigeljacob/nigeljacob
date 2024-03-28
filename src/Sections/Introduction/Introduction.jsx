import React, {useEffect, useState} from 'react'
import './Introduction.css'

const Introduction = () => {
    const [nameOpacity, setNameOpacity] = useState(1);
    const [nameScale, setNameScale] = useState(1);

    const [titleOpacity, setTitleOpacity] = useState(0);
    const [titleScale, setTitleScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        const scrollFraction = window.scrollY / maxScroll;

        if((1 - scrollFraction * 2.5) > -0.1) {
            setNameScale(1 + scrollFraction * 1);
            setNameOpacity(1 - scrollFraction * 5);
        } else {
            setNameOpacity(0);
        }

        if((1 - scrollFraction * 5) < 0.2 && (1 - scrollFraction * 2.5) > -0.45){
            setTitleOpacity(scrollFraction * 3.5);
            setTitleScale(1 + scrollFraction * 1);
        } else {
            setTitleOpacity(0);
        }

        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen fixed z-[-1000]">
        <div className="w-fit">
          <h3 id="hi">Hey There! This is</h3>
        </div>
        <h1
          id="name"
        >
          Nigel Jacob
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center w-screen h-screen fixed z-[-1000]">
        <h1
          id="title"
          className="gochi-hand-regular"
        >
          Full Stack <br></br> Developer
        </h1>
      </div>
    </>
  );
}

export default Introduction