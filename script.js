const options = [
    {id:"option1",text:"JavaScript",votes:0},
    {id:"option2",text:"Python",votes:0},
    {id:"option3",text:"Java",votes:0},
    {id:"option4",text:"C++",votes:0},
];

function submitVote(){
    const selectedOption = document.querySelector('input[name="poll"]:checked');
    if(!selectedOption){
        alert("Please select an option.");
        return;
    }
    const optionId = selectedOption.value;
    const selectedOptionObj = options.find((option)=> option.id === optionId);
    if(selectedOptionObj){
        selectedOptionObj.votes++;
        // console.log(selectedOptionObj);  
        displayResult();
        selectedOption.checked = false;
    }
}

function displayResult(){
    const result = document.getElementById('result');
    result.innerHTML = "";

    options.forEach((option)=>{
        const percentage = ((option.votes/ getTotalVotes()) * 100).toFixed(2) || 0;
        const barWidth = percentage > 0 ? percentage + "%" : "0%";

        const optionResult = document.createElement("div");
        optionResult.className = "option-result";
        optionResult.innerHTML = `
            <span class = "option-text">${option.text}</span>
            <div class = "bar-container">
                <div class = "bar" style="width: ${barWidth};"></div>
            </div>
            <span class = "percentage">${barWidth}</span>
        `;
        
        result.appendChild(optionResult);
    });
    const total = document.createElement("h3")
    total.className="total";
    total.innerHTML = `<h3>Total Votes : ${getTotalVotes()}</h3>`
    result.appendChild(total)   
}

function getTotalVotes(){
    return options.reduce((total,option)=> total + option.votes,0);
}

displayResult();



