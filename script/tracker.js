console.log("Here you are!!");



/*******====> 00002: Inervies Button Toggle Workins JS 
 * When we are click on interview button this information save in intervieq button section so we set this.
 * How do it? We make an empty array. And push information in thid empty array.
 * 
 * 
 * **/
// 02.01: make empty array for interview & rejected
let interviewList = [];
let rejectedList = [];

// console.log(interviewList.push('23'));

// 02.02: interview count means how much item/information in interviewList array. same as rejected
// interviewCount.innerText = interviewList.length;
// rejectedCount.innerText = rejectedList.length;




/**======>00000001:   Dashboar counter javascript section **/

// 01.01: dashboard all count number get by ID
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
// console.log(totalCount, interviewCount, rejectedCount);

/**
 * let totalCount = document.getElementById('total-count').innerText;
 * console.log(totalCount)
 * Here initial total count is 0. We are cecked by console.log()
 */

// 01.02: How much total number in section? all card number is total count. okay
// We are count all card number. Means how much children in their we count it

let allCardSection = document.getElementById('all-cards');
// console.log(allCardSection);

// ০৩.০১ঃ মেইনের উপরে ইভেন্ট ডেলিগেশনঃ
const mainContainer = document.querySelector('main')
console.log(mainContainer);


// 01.03: Declare a function cause code are not repeat again and again
function calculateCount() {
    totalCount.innerText = allCardSection.children.length;

    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
// interviewList.push('1erwe, {isjfid}, djsi, djis');

calculateCount();


// 0000006.01: button toggling color change
const totalFilterBtn = document.getElementById('total-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

// 0000006.02 style change

// 0000005: toggle style fuction defined
function toggleStyle(id) {
    console.log("click button confirmed");

    totalFilterBtn.classList.remove('text-white', 'bg-blue-500');
    interviewFilterBtn.classList.remove('text-white', 'bg-blue-500');
    rejectedFilterBtn.classList.remove('text-white', 'bg-blue-500');

    totalFilterBtn.classList.add('text-gray-600');
    interviewFilterBtn.classList.add('text-gray-600');
    rejectedFilterBtn.classList.add('text-gray-600');

    const selected = document.getElementById(id);
    selected.classList.add('text-white', 'bg-blue-500');
}






