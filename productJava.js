const detailContainer = document.querySelector(".detailContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString)
const id = params.get("id");


const urlDetails = "https://www.melsom-development.no/wp-json/wc/store/products/" + id;


async function productSpecific() {
    try {
        const response = await fetch (urlDetails);
        const product = await response.json();
    
        console.log(product);

       detailContainer.innerHTML = `<h1>${product.name}</h1>`
    }
    catch(error) {
        console.log("error occurred", error);
        detailContainer.innerHTML = "We're sorry, it seems a spell went bad, try again later or refresh the page(error).";
    }

}

productSpecific()