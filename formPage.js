//Next Button for tabs
const step1Next = document.querySelector("#step1Next");
const step2Next = document.querySelector("#step2Next");
const step3Next = document.querySelector("#step3Next");
const step4Next = document.querySelector("#step4Next");
//Orginal tabs
const step1 = document.querySelector("#step1");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");
const step4 = document.querySelector("#step4");
//Tabs light
const step1tab = document.querySelector("#step1-tab");
const step2tab = document.querySelector("#step2-tab");
const step3tab = document.querySelector("#step3-tab");
const step4tab = document.querySelector("#step4-tab");
//Previous Button
const step2Prev = document.querySelector("#step2Prev");
const step3Prev = document.querySelector("#step3Prev");
const step4Prev = document.querySelector("#step4Prev");
const as = document.querySelector("#as");
const flexCheckDefault = document.querySelector("#flexCheckDefault");

step1Next.addEventListener("click", function () {
  step1tab.classList.remove("active");
  step1.classList.remove("active");
  step2.classList.add("active");
  step2tab.classList.add("active");
});
//Finish
const finishButton = document.querySelector("#step4Finish");
//Step2

step2Prev.addEventListener("click", function () {
  step1.classList.add("active");
  step2.classList.remove("active");
  step2tab.classList.remove("active");
  step1tab.classList.add("active");
});
step2Next.addEventListener("click", function () {
  step2.classList.remove("active");
  step3.classList.add("active");
  step3tab.classList.add("active");
  step2tab.classList.remove("active");
});
//Step3
step3Prev.addEventListener("click", function () {
  step2.classList.add("active");
  step3.classList.remove("active");
  step3tab.classList.remove("active");
  step2tab.classList.add("active");
});
step3Next.addEventListener("click", function () {
  step3.classList.remove("active");
  step4.classList.add("active");
  step4tab.classList.add("active");
  step3tab.classList.remove("active");
});
//step4//
step4Prev.addEventListener("click", function () {
  step3.classList.add("active");
  step4.classList.remove("active");
  step4tab.classList.remove("active");
  step3tab.classList.add("active");
});
step4tab.addEventListener("click", function () {});

//check box//

flexCheckDefault.addEventListener("click", function () {
  if (finishButton.style.display === "block") {
    finishButton.style.display = "none";
  } else {
    finishButton.style.display = "block";
  }
});

//Forms-dashboard//

//Your Information
const forms = document.querySelector("#forms");
const cardBody = document.querySelector("#card-body");
const navLinkYourInformation = document.querySelector(
  "#nav-link-your-information"
);
forms.addEventListener("click", function () {
  myresumePage.style.display = "none";
  callInformatinPage.style.display = "none";
  picturePage.style.display = "none";
});
navLinkYourInformation.addEventListener("click", function () {
  if (cardBody.style.display === "block") {
    cardBody.style.display = "none";
  } else {
    cardBody.style.display = "block";
  }
});

//Tell Us
const navLinkCallInformation = document.querySelector(
  "#nav-link-call-information"
);
const callInformation = document.querySelector("#tell-us-page");
const navLinkTellUs = document.querySelector("#nav-link-tellus");
const cardBody1 = document.querySelector("#card-body1");
navLinkCallInformation.addEventListener("click", function () {
  if (cardBody1.style.display === "block") {
    cardBody1.style.display = "none";
  } else {
    cardBody1.style.display = "block";
  }
});
navLinkTellUs.addEventListener("click", function () {
  cardBody.style.display = "none";
  myresumePage.style.display = "none";
  picturePage.style.display = "none";
});

//resume//
const myresume = document.querySelector("#my-resume");
myresume.addEventListener("click", function () {
  cardBody.style.display = "none";
  callInformatinPage.style.display = "none";
  picturePage.style.display = "none";
});
const myresumePage = document.querySelector("#my-resume-page");
const navLinkMyInformation = document.querySelector("#nav-link-my-information");
navLinkMyInformation.addEventListener("click", function () {
  myresumePage.style.display = "block";
});
//call information
const callInformatinPage = document.querySelector("#call-onformation-page");
navLinkCallInformation.addEventListener("click", function () {
  callInformatinPage.style.display = "block";
  cardBody.style.display = "none";
  myresumePage.style.display = "none";
});
//picture
const picture = document.querySelector("#picture");
const picturePage = document.querySelector("#picture-page");
picture.addEventListener("click", function () {
  cardBody.style.display = "none";
  myresumePage.style.display = "none";
  callInformatinPage.style.display = "none";
});
const pictureNavLink = document.querySelector("#nav-link-picture");
pictureNavLink.addEventListener("click", function () {
  picturePage.style.display = "block";
});

//Forms/signup/customer's detail
const txtFname = document.querySelector("#txt-firstname");
const txtLname = document.querySelector("#txt-lastname");
const txtEmail = document.querySelector("#txt-email");
const txtPhone = document.querySelector("#txt-phone-number");
const txtAddress = document.querySelector("#txt-address");
const txtAge = document.querySelector("#txt-age");
const txtStudy = document.querySelector("#txt-study");
const txtNationality = document.querySelector("#txt-nationality");
finishButton.addEventListener("click", function () {
  as.innerHTML += `${txtFname.value} ${txtLname.value} ${txtAge.value} ${txtAddress.value} ${txtEmail.value} ${txtEyecolor.value} ${txtEyecolor.value}`;
});


//Forms/signup/customer's detail
const txtHeight = document.querySelector("#txt-height");
const txtWeigh = document.querySelector("#txt-wigh");
const txtEyecolor = document.querySelector("#txt-eyecolor");
const txtSkincolor = document.querySelector("#txt-skincolor");
