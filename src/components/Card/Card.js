import './Card.css';

function Card(props) {

    function handleChoice() {
        if (!props.disabled)
            props.handleChoice(props.card);
    }

    return (
        <div className='card'>
            <div className={props.flipped ? "flipped" : ""}>
                <img  className={`front ${props.card.matched ? "matched" : ''}`} src={props.card.src} alt="card front" />
                <img className='back' src="/images/9-0000.jpg" alt="card back" onClick={() => handleChoice()} />
            </div>
        </div>
    );
}

export default Card;
