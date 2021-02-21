function compute()
{
    // get the value contained in the principal textbox
    var principal = document.getElementById("principal").value;
    if (principal < 1)
    {
        // if the principal is less than 1 then put up an alert asking for
        // a value of 1 or greater
        alert("Enter a positive number");
        // set the focus back to the principal textbox
        document.getElementById("principal").focus();
        return; // we need a valid value for principal

    }
    // compute the amount of interest the will be paid over the course x Years
    var rate = document.getElementById("rate").value; // interest Rate
    var years = document.getElementById("years").value; // number of Years
    var interest = principal * years * rate / 100;
    var d = new Date(); // get the current date object
    var now = d.getFullYear(); //get the current year from the date object
    var future = parseInt( now ) + parseInt(years);

    // write out the results as a new sentence
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <mark>"+principal+ "</mark>, <br>at an interest rate of <mark>"+rate+"</mark>%.<br> You will receive an amount of <mark>"+interest+"</mark>,<br> in the year <mark>"+future+"</mark><br>";


}
function read_slider() {
    // read the value of the rate slider and put that value, the Rate
    // into the interest element
    var rate = document.getElementById("rate").value;
    document.getElementById("interest").textContent = rate +"%";
}
