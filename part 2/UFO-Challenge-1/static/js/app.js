// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
function buildTable(tableData) {
// Clear out any existing data
tbody.html("");

// Loop through each object in ufoData
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
  // `date/time` column to find rows that match user input.
  
function handleClick() {
  
// prevent refresh 
d3.event.preventDefault();
  
// Get the datetime value from the filter
var date = d3.select("#datetime").property("value");
  
let filteredData = tableData;
  
// Check to see if a date was entered and filter the
// data using that date.

if (date) {
// Apply `filter` to the table data to only keep the
// rows where the `datetime` value matches the filter value
filteredData = filteredData.filter(row => row.datetime === date);
}
  
// build the filtered table based on date selected
buildTable(filteredData);
}
  
// click button event 
d3.selectAll("#filter-btn").on("click", handleClick);
  
// load page default when page loads 
buildTable(tableData);
