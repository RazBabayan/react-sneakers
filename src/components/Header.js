function Header (props) {
    return(
        <header>
          <div className='headerLeft'>
          <img width={60} height={60}  src='/img/sneaker-logo.png'/>
          <div className='headerInfo'>
            <h3>React Sneakers</h3>
            <p>best sneakers store</p>
          </div>
          </div>
          <ul className='headerRight'> 
            <li onClick={props.onClickCart}>
            <img width={18} height={18}  src='/img/shopping-cart.png'/>
             <span className="counter">{props.itemsCount}</span>
              <span>
                <b>240$</b></span>
            </li>
            <li >
            <img width={18} height={18}  src='/img/account.png'/>
              </li>
          </ul>
        </header>
        );
}

export default Header;