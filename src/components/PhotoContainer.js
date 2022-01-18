import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

function PhotoContainer() {	
	const [nasaPhoto, setNasaPhoto] = useState([]);

	useEffect(() => {
		axios
      .get(process.env.API_URL)
			.then(response => {
				console.log(response.data);
				setNasaPhoto(response.data);
			})
			.catch(error => {
				console.log('Error getting data from NASA.', error)
			});
	}, []);

  return (
		<div className="photo-container">
			<PhotoCard />
		</div>
	)};

export default PhotoContainer; 
