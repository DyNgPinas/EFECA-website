/*
FAQs.html
*/

/* Random Q/A */
const questions = [
	"Is it available on Windows and/or Iphone?",
	"Is it safe to use?",
	"Is it free to download and use?",
	"Will I get ban if I use it?",
	"Does EFECA affiliated with the devs of Axie Infinity?"
];

const answers = [
	"Not yet, it is only available on android devices as of now.",
	"It safe to use since it does not request storage or network permission and it does not collect any form of data or file.",
	"EFECA is free to download and use. It doesn't have ads. However, if you want to help the developer, you can simply just subscribe and follow 'Dy ng Pinas' Youtube channel and Facebook page.",
	"You won't get ban by using EFECA since it is not automated and also not a scripting. If you want to be sure, you may ask any of the moderators of Axie Infinity on their Official Discord Channel",
	"No, EFECA is only a fan made app and has no connection with the developers of Axie Infinity."
]

let rnd = questions.length;

var random = Math.floor(Math.random() * rnd);
	
var question = document.getElementById("highlightQ");
question.innerHTML = questions[random];

var answer = document.getElementById("highlightA");
answer.innerHTML = answers[random];



/* QA contents */

let count;
let var_name = {};

for (count = 0; count < questions.length; count++){
	let q = "q" + (count + 1);
	let a = "a" + (count + 1);

	var_name[q] = document.getElementById(q);
	var_name[q].innerHTML = questions[count];

	var_name[a] = document.getElementById(a);
	var_name[a].innerHTML = answers[count];
}



/* QA menu */

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var ans_cont = this.nextElementSibling;
    if (ans_cont.style.display === "block") {
		ans_cont.style.display = "none";
    } else {
		ans_cont.style.display = "block";
    }
  });
}

/* Index.html */

function download(){
	if (confirm("For the better compatability of EFECA on your device, it is better to download from Playstore. Do you still want to proceed?")) {
		window.location.href='https://bit.ly/efecadownload';
	  } else {
		
	  }
}
