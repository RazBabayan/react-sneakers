function Drawer ({onClose , onRemove, items =[]}){
  const getSum = () => {
    let sum = 0;
    items.forEach(e => sum += e.price)
    return sum;
  }

    return(
        <div  className='overlay'>
        <div className='drawerBlock'>
          <h2>
            Recycle <img  onClick = {onClose} width={20} height={20} src='/img/remove.svg' alt='Close'/>
            </h2>

         <div className='items'>
        {
          items.map((obj) => (
            <div className='cartItem'>
            <img  width={70} height={70} src={obj.imageUrl} alt='Adidas'></img>
            <div>
              <p className='cartP'>{obj.title}</p>
              <b>{obj.price} $.</b>
            </div>
            <img onClick = {() => onRemove(obj.id)} width={20} height={20} src='/img/remove.svg' alt='remove'></img>
          </div>
          ))
        }
         </div>
        <ul className='cartTotalBlock'>
          <li className='lili'>
            <b>Final</b>
            <div></div>
            <span>{getSum()}$</span>
          </li>
          <li className='lili'>
            <b>Tax 5%:</b>
            <div></div>
            <span>{getSum()/50}$</span>
          </li>
        </ul>
        </div>
      </div>
    )
}

export default Drawer;