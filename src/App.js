import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://62dbd63c4438813a260b726e.mockapi.io/Items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (props) => {
    setCartItems([...cartItems, props]);
  };

  const onRemoveFromCart = (id) => {
    const newCartItems = [...cartItems].filter((element) => element.id != id);
    setCartItems(newCartItems);
  };

  const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          onRemove={onRemoveFromCart}
          items={cartItems}
          onClose={() => setCartOpened(false)}
        />
      ) : null}
      <Header itemsCount={cartItems.length} onClickCart={() => setCartOpened(true)} />
      {/* -------------------------------------------------- */}
      <div className="content">
        <div className="search-block">
          <h1>{searchValue ? `search: "${searchValue}"` : 'All Sneakers'}</h1>
          <div className="search">
            <img src="/img/search.png" alt="search" />
            <input onChange={onChangeSearchInput} value = {searchValue} placeholder="search..." />
           {searchValue && <button onClick={() => setSearchValue('')}><b>X</b></button>} 
           {/* && ete searchvalue ka nor tox haytnvi ete undefined kam null ev ayln mi ereva */}
          </div>
        </div>

        <div className="sneakers">
          {/* includes - gtnumenq en elementnery voronq kan searchvalue um // mapovel pttvumenq  */}
          {items.filter(obj => obj.title.includes(searchValue)).map((obj) => ( 
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={ onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
