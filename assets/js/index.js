let countries = document.getElementById("country");
const fetchCountries = async () => {
  let url = "https://restcountries.com/v3.1/all";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Content-Type": "application/json",
    },
  }).catch((err) => console.log("Catch ERROR: " + err));
  // console.log(res);
  if (res.status === 200) {
    const data = await res.json();
    data.map((val) => {
      let cnames = val.name.common;
    //   console.log([cnames]);
      countries.insertAdjacentHTML("beforeend", `<option>${cnames}</option>`);
    });
    // [...countries.children].sort().forEach((element) => {
    //   console.log(element);
    // });
    // for (let child of countries.children) {
    //   console.log(child);
    // }
  } else {
    console.log("Response is not 200");
  }
};
fetchCountries();

var arr = [];
arr[0] = "Hassan";
arr[1] = "khan";

// console.log(arr.concat());
