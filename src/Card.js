import './Card.css'

function Card({ title, atts, image }) {
  return (
    <div className='cards'>
      <div className="title"> This is: {title}</div>
      <div>AKA: "{atts}"</div>
        <img src={image} alt="PUKUZ" className='img'/>
    </div>
  );
}

export default Card;
