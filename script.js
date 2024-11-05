(function(){
    "use strict";
    const detForm = document.getElementById("destination-details-form");

    detForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    const destName = event.target.elements["name"].value;
    const destLocation = event.target.elements["location"].value;
    const destPhoto = event.target.elements["photo"].value;
    const destDescription = event.target.elements["description"].value;

    for (let i = 0; i < detForm.length; i++) {
        detForm.elements[i].value = "";}
    
    const destCard = createDestinationCard(destName, destLocation, destPhoto, destDescription);

    const listContainer = document.querySelector("#destinations-container");

    if(listContainer.children.length === 0){
        document.getElementById("title").innerHTML ="MY WISH LIST";
    };

    listContainer.appendChild(destCard);
    });

    function createDestinationCard(name, location, photoUrl,description){
        const card = document.createElement("div");
        card.className = "card";
        
        const img = document.createElement("img");
        img.setAttribute("alt",name);

        const constantPhotoUrl = "signpost.jpg";

        img.setAttribute("src",photoUrl.length === 0 ? constantPhotoUrl : photoUrl);
        
        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const cardSubtitle = document.createElement("h4");
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle); 

        if(description.length !==0 ){
            const cardText = document.createElement("p");
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        };
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove"; 
        
        removeButton.addEventListener("click",removeDestination);
           
        cardBody.appendChild(removeButton);

        card.appendChild(cardBody);

        return card;

        function removeDestination(event){
            const card = event.target.parentElement.parentElement;
            card.remove();
        };

        
    };

   
})();