import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchObj, setSearchObj] = useState('')

  const removeListing = doomedListing => {
    const newListings = listings.filter((listObj) => {
      return doomedListing.id !== listObj.id
    })
    setListings(newListings)
    fetch(`http://localhost:6001/listings/${doomedListing.id}`, {method: "DELETE"})
  }

  useEffect( () => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listingsArray => setListings(listingsArray))
  }, [])

  const searchedListings = listings.filter(listObj => {
     return listObj.description.toLowerCase().includes(searchObj.toLowerCase())
    })
  

  return (
    <div className="app">
      <Header setSearchObj={setSearchObj} />
      <ListingsContainer removeListing={ removeListing } listings={searchedListings}/>
    </div>
  );
}

export default App;
