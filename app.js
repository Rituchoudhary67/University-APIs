
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

//event listner  for country
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    console.log("click");
    let colArr = await getColleges(country);
    showCountry(colArr);
});

//function for get country 
function showCountry(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch(e) {
        console.log("error",e);
    }
}

//******* */


btn2.addEventListener("click", async() => {
    let list = document.querySelector("#list");
    list.innerText = "";
    console.log("state btn click");
    let state = document.querySelector("#in2").value;
    console.log(state);
    let stateArr = await getColleges(state);
    showState(stateArr);
});



//function to get state 
function showState(stateArr) {
    let list = document.querySelector("#list2");
    list.innerText = "";
    for(coll of stateArr) {
        console.log(coll.name);
        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li);
    }
};



async function getCollegesByState(state) {
    try {
        let resp = await axios.get(url+state);
        return resp.data;
    } catch(e) {
        console.log("error");
    }
}