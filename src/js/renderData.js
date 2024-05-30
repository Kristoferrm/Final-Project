

function renderData(folks) {
	const mainContentContainer = document.querySelector(".main-content-container");
	folks.forEach((folk) => {

		const folksContainer = document.createElement("span");
		const folkFirstname = document.createElement("h3");
		const folkLastname = document.createElement("h3");
		const folkAvatar = document.createElement("h3"); 
		const folkEmail = document.createElement("h3");
		const avatarContainer = document.createElement("span");
		const avatarImage = document.createElement("img");
		
		// Setting the content
		avatarImage.src = folk.avatar;
		folkFirstname.textContent = folk.firstname;
		folkLastname.textContent = folk.lastname;
		folkEmail.textContent = folk.email;

		// Appending elements correctly
		mainContentContainer.append(folksContainer);
		folksContainer.append(folkFirstname, folkLastname, folkEmail, avatarContainer);
		avatarContainer.append(avatarImage);
	});
}

export default renderData;
