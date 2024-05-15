/* eslint-disable no-unused-vars */
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
        const screenHeight = window.innerHeight;

        const hi = document.getElementById('hi');
        const name = document.getElementById("name");
        const title = document.getElementById("title");

        const namePosition = name.getBoundingClientRect().top;

        if(1 - scrollFraction * 15 >= 0) {
            setNameScale(1 + scrollFraction * 10);
            setNameOpacity(1 - scrollFraction * 15);
            hi.style.opacity = 1;

        } else {
            setNameOpacity(0);
            hi.style.opacity = 0;
        }

        if(1 - scrollFraction * 15 <= 0.2) {
            hi.style.opacity = 0;
            setTitleOpacity(scrollFraction * 10);
            setTitleScale(1 + scrollFraction * 5);
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
          style={{ opacity: nameOpacity, transform: `scale(${nameScale})` }}
        >
          Nigel Jacob
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center w-screen h-screen fixed z-[-1000]">
        <h1
          id="title"
          className="gochi-hand-regular"
          style={{ opacity: titleOpacity, transform: `scale(${titleScale})` }}
        >
          Full Stack <br></br> Developer
        </h1>
      </div>
    </>
  );
}

export default Introduction