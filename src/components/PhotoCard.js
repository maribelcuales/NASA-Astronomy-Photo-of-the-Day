import React from "react";
import styled from "styled-components";

const DateContainer = styled.div`
	display: flex;	
	width: 80%;
	text-align: left;  
	margin: auto; 
	padding-bottom: 20px;
`

const PhotoCard = (props) => {
  return (
    <div className="photo-card-container">
      <div className="nasa-photo">
        <img
          className="nasa-photo"
          src={props.url}
          alt="Nasa"
        />
      </div>
      <div className="photo-details-container">
        <h2>{props.title} </h2>
        <p className="copyright">
          Image Credit and Copyright: {props.copyright}
        </p>
        <p className="photo-content">{props.desc} </p>
      </div>
      <DateContainer>
        <div className="badge-date" color="primary">
          Date: {props.date}{" "}
        </div>
        <div className="badge-credit" color="primary">
          Content and Image Credit: NASA
        </div>
      </DateContainer>
    </div>
  )}

export default PhotoCard;
