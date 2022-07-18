const btn_copy = document.getElementsByClassName("btn_copy")
const div_copy = document.getElementsByClassName("td_number")

btn_copy[0].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[0].textContent).then(() => {
    alert(div_copy[0].textContent + " 복사 완료");
  });
}

btn_copy[1].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[1].textContent).then(() => {
    alert(div_copy[1].textContent + " 복사 완료");
  });
}

btn_copy[2].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[2].textContent).then(() => {
    alert("🤵🏻 " + div_copy[2].textContent + " 복사 완료!");
  });
}

btn_copy[3].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[3].textContent).then(() => {
    alert(div_copy[3].textContent + " 복사 완료");
  });
}

btn_copy[4].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[4].textContent).then(() => {
    alert("" + div_copy[4].textContent + " 복사 완료");
  });
}

btn_copy[5].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[5].textContent).then(() => {
    alert("👰🏻 " + div_copy[5].textContent + " 복사 완료!");
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