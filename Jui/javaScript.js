
function handalSearch() {
    const searchInputElament = document.getElementById('search_input_filed');
    // console.log(searchInputElament)
    const  searchInputValue = searchInputElament.value;
    // console.log(searchInputValue);

    loadPhone (searchInputValue);
}

const loadPhone = async (searchText) => {
    //console.log("Inssert the load phone function: ",searchText);
    
    const res = await fetch(`https://openapi.programming-hero.com/api/phone?search=${searchText}`);
    console.log("Server Respons",res);
    const serverData = await res.json();
    //console.log(serverData.data);
    displayPhone(serverData.data);
};

const displayPhone = (data) => {
   // console.log("Inside display phone function: ", data);
   console.log(data);
   const cardContaner = document.getElementById("Card_Section");

   data.forEach(phone => {
    //console.log(phone.phone_name);
    const productCard = document.createElement("div");
    productCard.classList.add("card");
   //console.log(productCard);

   productCard.innerHTML = `
    <div class="card_img">
                <img src=${phone.image}" alt="phone img">
            </div>
            <div>
                <h3 class="cardTitle">${phone.phone_name}</h3>
                <p class="cardDecraption">There are many variations of passages of available, but the majority have suffered</p>
            </div>
            <div class="card_prize">
                <span>$</span>
                <span id="card_item_Prize">999</span>
            </div>
            <div class="card_btn">
                <button class="btn">Show Details</button>
            </div>
   `;
    //console.log(phone);
    cardContaner.appendChild(productCard);
   });
};
