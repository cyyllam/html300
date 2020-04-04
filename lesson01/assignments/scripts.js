//Create array of objects containing ids, descriptions, and labels to build the
//inputs in HTML
const inputSet = [
    {
        inputId : 'input-reduce',
        inputDesc: `Enter a number. Your input will be added to the existing array
        and all numbers within the array will be summed.`,
        inputLabel: 'Reduce',
        inputSubmit: 'submit-reduce',
        inputResult: 'result-reduce'
    },
    {
        inputId : 'input-map',
        inputDesc: `Enter a number. Every number in the existing array will increase
        by your input.`,
        inputLabel: 'Map',
        inputSubmit: 'submit-map',
        inputResult: 'result-map'
    },
    {
        inputId : 'input-some',
        inputDesc: `Enter a number. This will determine if some of the numbers
        in the existing array is greater than your input. This will return 
        a boolean answer.`,
        inputLabel: 'Some',
        inputSubmit: 'submit-some',
        inputResult: 'result-some'
    },
    {
        inputId : 'input-find',
        inputDesc: 'Enter a number. Find if your input exists in the existing array.',
        inputLabel: 'Find',
        inputSubmit: 'submit-find',
        inputResult: 'result-find'
    }
];

$(document).ready(function(){
    //create HTML within the section tag
    const target = $('.input-set');
    inputSet.forEach(function(inputItem) {
        //add HTML elements with specific ids and labeling
        target.append(`<label for=${inputItem.inputId}>${inputItem.inputLabel}</label>`);
        target.append(`<p>${inputItem.inputDesc}</p>`);
        target.append(`<input type="text" id=${inputItem.inputId}>`);
        target.append(`<input type="submit" id=${inputItem.inputSubmit}></input>`);
        target.append(`<p><span id=${inputItem.inputResult}></span></p>`);
    })

    //each input will manipulate its own array of numbers
    const data1 = [1, 2, 3, 4],
    input1 = $('#input-reduce'),
    resultSum1 = $('#result-reduce');

    let data2 = [1, 2, 3, 4];
    const input2 = $('#input-map'),
    resultSum2 = $('#result-map');

    data3 = [1, 2, 3, 4],
    input3 = $('#input-some'),
    resultSum3 = $('#result-some');

    data4 = [1, 2, 3, 4],
    input4 = $('#input-find'),
    resultSum4 = $('#result-find');

     $('#submit-reduce').click(function(){
        const val = input1.val();
        const num = parseInt(val);
        //include input value in the starting array
        //this array will grow in length with every input
        data1.push(num);
        //calculate sum of all array elements
        const sum = data1.reduce((acc, curr) => acc + curr);
        resultSum1.text(`My total with reduce is now: ${sum}`);
        input1.val('');
     });

     $('#submit-map').click(function(){
        //this map function will increase each element based on input value
        const val = input2.val();
        const num = parseInt(val);
        //map array and replace starting array
        data2 = data2.map(element => element + num);
        resultSum2.text(`My array with map is now: ${data2}`);
        input2.val('');
     })

     $('#submit-some').click(function(){
        //this function will determine if some of the numbers
        //in the array are greater than the input value and
        //return a true or false answer
        const val = input3.val();
        const num = parseInt(val);
        const arrayMap = data3.some(element => element > num);
        //display result as 'yes' or 'no'
        const someResult = arrayMap ? 'Yes' : 'No';
        resultSum3.text(`Are some of the numbers in the array greater than your number?: ${someResult}`);
        input3.val('');
     })

     $('#submit-find').click(function(){
        //this function will search for an exact match in the array to
        //the input value
        const val = input4.val();
        const num = parseInt(val);
        const numResult = data4.find(element => element === num);
        //different print statements for different results
        if (numResult === num){
            resultSum4.text(`Yay! ${num} exists in the array`);   
        } else {
            resultSum4.text(`Sorry, ${num} does not exist in the array`)
        }      
        input4.val('');
     })
   }); 

