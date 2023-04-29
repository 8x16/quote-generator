console.log(
  "Hello Advanced User, \nPlease feel to give us any suggestions or contribute on github"
);

// const nextBtn = document.getElementById("nextBtn"); - no need for this

nextBtn.addEventListener("click", () => {
  document.location.reload();
});

/* To Fetch From an API */
const typeFitApiURL = "https://type.fit/api/quotes";
let apiQuotes;

//We can get data in 2 ways: 1-> fetch & 2 -> promise
//Fetch
/* async function useTypeFitApi() {
    try {
        const request = await fetch(typeFitApiURL);
        apiQuotes = await request.json();
        return apiQuotes;
    } catch(error){
        console.log(error);
    }
}

useTypeFitApi();
console.log(useTypeFitApi()); */
