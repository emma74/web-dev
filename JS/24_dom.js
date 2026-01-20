document.getElementById("main-heading").textContent="Modified heading with getElementById";

//Affect only the first matching tag
//const firstPara=document.querySelector(".text-paragraph");
// firstPara.textContent="Modified paragraph with querySelector";
// firstPara.style.color="red";
// firstPara.style.backgroundColor="yellow";
// firstPara.style.fontSize="30px";

//Affect all matching tags with class name text-paragraph
const firstPara=document.querySelectorAll(".text-paragraph");
firstPara.forEach(para => {
  para.textContent="Modified paragraph with querySelectorAll";
  para.style.color="red";
  para.style.backgroundColor="yellow";
  para.style.fontSize="20px";
});

//Add new elements
const newDiv=document.createElement('div');
newDiv.textContent="I am a newly added element";
document.body.appendChild(newDiv);

//Add new elements with querySelectorAll
// const newDivs=document.querySelectorAll(".text-paragraph");
// newDivs.forEach(div => {
//   div.textContent="I am a newly added element from cursor";
//   div.style.color="green";
//   div.style.backgroundColor="yellow";
//   div.style.fontSize="20px";
// });
//document.body.appendChild(newDivs);