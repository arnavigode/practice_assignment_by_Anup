import React from "react";
import styled from "styled-components";

const SearchStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  /* margin-bottom: 2%; */

  .inpSearch {
    width: 40%;
    height: 35px;
    border: 2px solid whitesmoke;
    background-color: #c4bebf;
    color: black;
    border-radius: 4px;
  }
  .btnSearch {
    height: 40px;
    border: 2px solid whitesmoke;
    background-color: #c4bebf;
    float: left;
    border-radius: 4px;
  }
  .search-container{
  width: 490px;
  display: block;
  margin: 0 auto;
}

input#search-bar{
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  outline: none;
  
 }

.search-icon{
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -62px;
  right: -45px;
}
`;
const SearchBar = () => {
  return (
    <SearchStyle>
      <form className="search-container">
        <input
          type="text"
          id="search-bar"
          placeholder="Search here..."
        />
        <img
          alt=""
          className="search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
        />
      </form>
      
    </SearchStyle>
  );
};

export default SearchBar;
