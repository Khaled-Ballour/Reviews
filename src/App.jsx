import people from './data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const nextIndex = (currentIndex - 1 + people.length) % people.length;
      return nextIndex;
    });
  };
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const nextIndex = (currentIndex + 1) % people.length;
      return nextIndex;
    });
  };

  const randomPerson = () => {
    console.log('clicked');
    let rand = Math.floor(Math.random() * people.length);
    if (rand === index) rand++;
    setIndex(rand % people.length);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="auther">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
