import {getImageUrl}  from './Utils.jsx';

export default function Demo() {
  const link1 ="https://en.wikipedia.org/wiki/Marie_Curie"
  const link2 ="https://en.wikipedia.org/wiki/Katsuko_Saruhashi"
  return (
    <div>
      <h1>Notable Scientists</h1>
      <div className='s1'>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={170}
          height={170}
        />
        <ol>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry,Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
          <a href={link1}>For More Information</a>
        </ol>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={170}
          height={170}
        />
        <ol>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ol>
        <a href={link2}>For More Information</a>
      </section>
      </div>
    </div>
  );
}
