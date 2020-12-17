
let data = fetch("airvisual.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    //this output logs the data in the console to understand the object being returned in JSON format.
    //by analyzing the JSON object I can determine the data structure, thus answering point 1)
    //At this point the data is extracted, formatted, and ready to be used.
    //------------------------------------------------------------------------------------------------
    
    humidity_count = JSON.stringify(data.historical.hourly['19'].hm_count,undefined,4);
    document.querySelector("#printer").innerText = `The number of humidity measurements taken within one hour on 1am Dec 16th 2020 is: ${humidity_count}`;
  });
