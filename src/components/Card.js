import React from "react";

function Card (props ) {

    const onClickPlus = () => {
      props.onPlus(props)
    }

    return (
        <div className='card' >
        <img width={25} height={25} src={props.imageUrl} alt="unliked"/>
          <img width={133} height={112} src={props.imageUrl}/>
          <h5>{props.title}</h5>
          <div className='cardBottom'>
            <div className='cardBottom2'>
              <p>Price:</p>
              <b>{props.price}</b>
            </div>
            
                <button onClick={ onClickPlus}>
                <b>+</b>
                </button>
           
          </div>
        </div>
    );
}

export default Card;