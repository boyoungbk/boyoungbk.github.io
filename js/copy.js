const btn_copy = document.getElementsByClassName("btn_copy")
const div_copy = document.getElementsByClassName("td_number")
const name_copy = document.getElementsByClassName("td_name")
const account_copy = document.getElementById("account_number")
const mdl_copy = document.getElementById("account_modal");

function closemodal_copy() {
  mdl_copy.style.display="none"
 };

window.onclick = function(event) {
 if (event.target == mdl_copy) {
   mdl_copy.style.display = "none";
 }
}

btn_copy[0].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[0].textContent).then(() => {
    mdl_copy.style.display="block"
    account_copy.innerHTML = `이판석 <br /> ${div_copy[0].textContent} <br /> 📌 계좌번호가 복사 되었습니다.`
  });
}

btn_copy[1].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[1].textContent).then(() => {
    mdl_copy.style.display="block"
    account_copy.innerHTML = `이현재 <br /> ${div_copy[1].textContent} <br /> 🤵🏻 계좌번호가 복사 되었습니다.`
  });
}

btn_copy[2].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[2].textContent).then(() => {
    mdl_copy.style.display="block"
    account_copy.innerHTML = `김창규 <br /> ${div_copy[2].textContent} <br/> 📌 계좌번호가 복사 되었습니다.`
  });
}

btn_copy[3].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[3].textContent).then(() => {
    mdl_copy.style.display="block"
    account_copy.innerHTML = `김옥경 <br /> ${div_copy[3].textContent} <br /> 📌 계좌번호가 복사 되었습니다.`
  });
}

btn_copy[4].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[4].textContent).then(() => {
    mdl_copy.style.display="block"
    account_copy.innerHTML = `김보영 <br /> ${div_copy[4].textContent} <br /> 👰🏻 계좌번호가 복사 되었습니다.`
  });
}

function clip(){
	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.")
}