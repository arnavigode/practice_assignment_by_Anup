import React from "react";
import styled from "styled-components";

const ListStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* margin-top: 1%; */
.listCont{
    width: 40%;
    height: 80px;
    text-align: left;
    background-color: gray;
    overflow: scroll;
    /* border: 2px solid whitesmoke; */
}
.emptyDiv{
    width: 2.5%;
}
ul{
list-style-type: none;
}
`
const List = () => {
  return (
    <div>   
            <ListStyle>
                <div className="listCont">
                <ul>
                  <li> List</li>
                  <li>List</li>
                  <li>List</li>
                  <li>List</li>
              </ul>
                </div>
                <div className="emptyDiv"></div>
             
            </ListStyle>

    </div>
  );
};

export default List;
