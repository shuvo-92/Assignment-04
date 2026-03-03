let currentTab = 'all';
const tabActive = ["bg-blue-500", "text-white"];
const tabInActive = ["bg-white", "text-gray-600"]; // অ্যাক্টিভ আর ইনঅ্যাক্টিভ এর স্টাইল গুলো দিলাম।


// all ক্লিক করলে শুধু all এর কার্ড আর inteview এ ক্লিক করলে এর কার্ড দেখাবে এটা এখন বানানোর প্রসেস দেখানো হবে।
// তিনটা সেকশন আমরা করেছি। এর জন্য প্রত্যেক্টিকে আলাদা ভাবে আনবো
const allContainer = document.getElementById('all-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');
const emptyState = document.getElementById('empty-state');
//   console.log(allContainer, rejectedContainer, interviewContainer); //সব গুলোই এখানে পাবো

// সবগুলো প্রাথমিক ভাবে hidden থাকবে। ফাংশনের মধ্যে এগুলোকে দিবো


// বাটম গুলো চলার জন্য একটা ফাংশন বানবো। মানে যে বাটন গুলো তে চাপ দিলে একটা থেকে আরেকটাতে যায়ত সেটার জন্য আমরা ফাংশন লিখিবো। 
function switchTab(tab) {  //tab মানে কোণ ট্যাব টা আসবে তাকে এখানে আনা 
    // console.log(tab);
    const tabs = ["all", 'interview', 'rejected'];
    currentTab = tab;
    // এই তিনটা ট্যাব নিয়ে কাজ করবো তাই এই ৩ টাকে ডিফাইন করে দিলাম। যদি আর ট্যাব থাকতো এগুলোকে এখানে দিয়ে দিতাম।
    // html এর বাটনে আইডি দিয়ে দিবো।
    // এখন ফর লুপ চালাবো. কারণ যেটা অ্যাক্টিভ সেটাতে অ্যাক্টিভ স্টাইল লাগবে, বাকিগুলোতে ইনঅ্যাক্টিভ স্টাইল লাগবে. বা অ্যাক্টিভ স্টাইলগুলো রিমুভ হবে। এজন্য

    for (t of tabs) {
        // console.log(t)
        const tabName = document.getElementById("tab-" + t); //আইডি দিয়ে ধরে আনলাম আর tab- নামে prefix যুক্ত করে দিলাম। সাথে t যোগ এর মানে একটি করে এখানে যোগ দিবে।
        // যদি এখানে  tab- নামে prefix  না দেয়া হয় তাহলে null আসবে। কারণ আইডিগুলোর সামনে tab লেখা। 
        // মূলকাজ হলো যেটা অ্যাক্টিভ থাকবে সেটাতে স্টাইল অ্যাপ্লাই হবে। উপরে সেগুলোর স্টাইল দেয়হা হলো। 
        //  console.log(tabName);

        // if দিবো। কেনো? কারণ যে বাটন টাতে ক্লিক দিবো শুধু সেটার জন্য

        if (t === tab) { // t যদি tab এর সমান হয়
            tabName.classList.remove(...tabInActive);
            tabName.classList.add(...tabActive); //মানে যদি t যদি কোনো বাটন হয় তাহলে তার উপর অ্যাক্টিভ অ্যপ্লাই হবে। আর ইনঅ্যাক্টিভ গুলো বন্ধ হয়ে যাবে।
        }
        else {
            tabName.classList.add(...tabInActive);
            tabName.classList.remove(...tabActive); //অথবা সেটা যদি চাপদেয়া বাটন টি না হয় তাহলে তার স্টাইল গুলোতে যুক্ত হবে  inAnctive। বাদ যাবে অ্যাক্টিভ।


        }
    }

    // ইনিশিয়ালি আমরা হিডেন রাখছি কিন্তু অ্যাকুরেট ভাবে করার জন্য আমরা একুটা অ্যারেতে রেখে করবো।
    // এগুলাতে আবার হিডেন করেছি। ফাংশন চলবে তখন সে সব কিছুকে হিডেন করবে, পরে কন্ডিশন অনুযায়ী কাজ করবে, মানে যার দ্রকার তার হিডেন রিমুভ করে দিবে।

    const pages = [allContainer, interviewContainer, rejectedContainer];
    for (const section of pages) {
        section.classList.add("hidden");
    }

    emptyState.classList.add("hidden");

    if (tab === "all") {
        allContainer.classList.remove("hidden");
        if (allContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }
    else if (tab === "interview") {
        interviewContainer.classList.remove("hidden");
        if (interviewContainer.children.length < 1) {
            emptyState.classList.remove("hidden")
        }
    } else {
        rejectedContainer.classList.remove("hidden");
        if (rejectedContainer.children.length < 1) {
            emptyState.classList.remove("hidden")
        }
    }

    updateStat();
}

// stat update
// এখন কাজ করবো ড্যাশবোর্ডের ফাংশনালিটি নিয়ে। কিভাবে এগুলো বাড়বে বা কমবে,
// সবগুলোকে এখানে আপডেট করলাম আইডি দিয়ে
const totalStat = document.getElementById('stat-total');
const interviewStat = document.getElementById('stat-interview');
const rejectedStat = document.getElementById('stat-rejected');
const availableStat = document.getElementById('availble');
// // টোটাল কতগুলো আছে> যতগুলো allContainer এর চিল্ড্রেন। কারণ এর ভেতরেই সবগুলো চাইল্ড আছে।
// totalStat.innerText = allContainer.children.length;


// সব করেছি। কিন্তু প্রাথমিক অবস্থায় all সিলেক্ট থাকার কথা। কিন্তু নাই। এজন্য ফাইংশন কল করে এর ভিতরে দিয়ে দিবো cureenttb. মানে যখন আমাদের পেজ শুরু হবে তখন তো কোনো বটনে ক্লিক করবে না। গ্লোবালি ফাংশন কল হঅয়ে আসবে। প্রথমটা
switchTab(currentTab);


// ইন্টারভিউ আর রিজেক্ট বাতনে চাপ দিলে তা দেখাবে স্ট্যাট এর মাঝে, সেটা ইভেন্টলসিনার দিয়ে আপডেট করতে হবে। আর ডিলেট বাটনের জন্য একটা ইভেন্ট লিসেনার দিতে হবে।

// এর জন্য প্রত্যেক বাটনে আলাদা করে আইডি দিতে হবে বা আলাদা করে ক্লাস এড করতে হবে। আবার সেগুলোতে কুয়েরি দিয়ে ইভেন্ট দিতে হবে, এভাবে না করে আমরা ইভেন্ট ডেলিগেশনের মাধ্যমে করতে পারি, একটা দিয়ে তিওটা জিনিস চালানো যাবে। mainContainer এর মাঝে লাগালাম 
document.getElementById("jobs-container").addEventListener('click', function (event) {
    const clickElement = event.target;  // 
    // console.log(clickElement.parentNode.parentNode.parentNode);
    const card = clickElement.closest(".card");
    // console.log(card);
    const status = card.querySelector(".status");
    const parent = card.parentNode;

    if (clickElement.classList.contains("interview-btn")) {
        // console.log("Interview Buttoon Clic0kd");
        interviewContainer.appendChild(card);
        status.innerText = "INTERVIEWED"
        // status.style = "bg-red"
        updateStat();

    }
    if (clickElement.classList.contains("rejected-btn")) {
        // console.log("Rejected Buttoon Clic0kd");
        rejectedContainer.appendChild(card);
        status.innerText = "REJECTED"
        updateStat();
    }
    if (clickElement.classList.contains("delete")) {
        // console.log("Delete Buttoon Clic0kd");
        // console.log(parent);
        parent.removeChild(card);
        updateStat();
    }

})




function updateStat() {
    // totalStat.innerText = allContainer.children.length;
    // interviewStat.innerText = interviewContainer.children.length;
    // rejectedStat.innerText = rejectedContainer.children.length;

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length
    };

    totalStat.innerText = counts.all;
    interviewStat.innerText = counts.interview;
    rejectedStat.innerText = counts.rejected;

    availableStat.innerText = counts[currentTab];

    if (counts[currentTab] < 1) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }
}
updateStat();