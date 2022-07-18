const btn_copy = document.getElementsByClassName("btn_copy")
const div_copy = document.getElementsByClassName("td_number")
const name_copy = document.getElementsByClassName("td_name")

btn_copy[0].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[0].textContent).then(() => {
    alert(div_copy[0].textContent + "   이판석   복사 되었습니다.");
  });
}

btn_copy[1].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[1].textContent).then(() => {
    alert(div_copy[1].textContent + "   김덕남   복사 되었습니다.");
  });
}

btn_copy[2].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[2].textContent).then(() => {
    alert("🤵🏻 " + div_copy[2].textContent + "   이현재   복사 되었습니다!");
  });
}

btn_copy[3].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[3].textContent).then(() => {
    alert(div_copy[3].textContent + "   김창규   복사 되었습니다.");
  });
}

btn_copy[4].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[4].textContent).then(() => {
    alert("" + div_copy[4].textContent + "   김옥경   복사 되었습니다.");
  });
}

btn_copy[5].onclick = () => {
  window.navigator.clipboard.writeText(div_copy[5].textContent).then(() => {
    alert("👰🏻 " + div_copy[5].textContent + "   김보영   복사 되었습니다!");
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