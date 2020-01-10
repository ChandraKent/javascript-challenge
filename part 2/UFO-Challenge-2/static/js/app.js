// **UFO-level-2**
// ### Level 2: Multiple Search Categories (Optional)

// * Complete all of Level 1 criteria.

// * Using multiple `input` tags and/or select dropdowns, 
// write JavaScript code so the user can to set multiple filters 
// and search for UFO sightings using the following criteria based 
// on the table columns:

// 1. `date/time`
// 2. `city`
// 3. `state`
// 4. `country`
// 5. `shape`

// Get the data from data.js and copy it into a new array
// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(tableData) {
// Clear out any existing data
tbody.html("");

// Loop through each object in tableData
// and append rows and cells for each value
tableData.forEach((dataRow) => {
// Append a row to the table body
var row = tbody.append("tr");

// Loop through each field in the dataRow and add
// each value as a table cell (td)
Object.values(dataRow).forEach((val) => {
var cell = row.append("td");
cell.text(val);
}
);
});
}

// Use a date form in your HTML document and write JavaScript 
// code that will listen for events and search through the 
// `date/time` , `city`, `state`, `country`, and `shape` columns 
// to find rows that match user input.



function handleClick() {

// prevent refresh 
d3.event.preventDefault();

// Get the date value from the filter
var date = d3.select("#datetime").property("value");

// Get the city value from the filter
var city = d3.select("#city").property("value");

// Get the state value from the filter
var state = d3.select("#state").property("value");

// Get the country value from the filter
var country = d3.select("#country").property("value");

// Get the shape value from the filter
var shape = d3.select("#shape").property("value");

let filteredData = tableData;

// Apply date filter to the table data 
if (date) {
filteredData = filteredData.filter(row => row.datetime === date);
}

// Apply  city filter to the table data 
if (city) {
filteredData = filteredData.filter(row => row.city === city);
}

// Apply state filter to the table data 
if (state) {
filteredData = filteredData.filter(row => row.state === state);
}

// Apply country filter to the table data 
if (country) {
filteredData = filteredData.filter(row => row.country === country);
}
// Apply shape filter to the table data 
if (shape) {
filteredData = filteredData.filter(row => row.shape === shape);
}


// filter the table 
buildTable(filteredData);
}

// click button event 
d3.selectAll("#filter-btn").on("click", handleClick);



// load page default when page loads 
buildTable(tableData);

