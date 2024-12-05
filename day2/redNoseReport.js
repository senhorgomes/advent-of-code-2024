const fs = require('fs')
fs.readFile('./puzzleInput.txt', 'utf8', (e,d)=>{
    const arrayOfEntries = d.trim().split('\n');
    let numberOfSuccessfulReports = 0;
    // Loop throught each array
    // Check if asce, or desc
    // is within range of 1,2,3
    const arrayOfReports = arrayOfEntries.map((singleReport)=> 
        singleReport.split(' ').map((e)=> Number(e))
    );
    // From temp array,  0
    arrayOfReports.forEach((singleReport)=> {
        // Single report
        let count = true;
        let mode = "";
        singleReport.forEach((number, index)=> {
            // Check to see if the array is decreasing or increasing
            if(number > singleReport[index + 1] && mode === "" && index === 0 && Math.abs(number - singleReport[index + 1]) <= 3){
                return mode = "DESC";
            }
            if(number < singleReport[index + 1] && mode === "" && index === 0 && Math.abs(number - singleReport[index + 1]) <= 3){
                return mode = "ASCE";
            }

            if(index < singleReport.length + 1){
                if(number === singleReport[index + 1] || number > singleReport[index + 1] && mode === "ASCE" || number < singleReport[index + 1] && mode === "DESC" || Math.abs(number - singleReport[index + 1]) > 3){
                    count = false;
                }
            }
            if(mode === ""){
                count = false;
            }
            
        })
        console.log(singleReport, count)
        count ? numberOfSuccessfulReports += 1 : 0;
    })
    console.log(numberOfSuccessfulReports)
});
