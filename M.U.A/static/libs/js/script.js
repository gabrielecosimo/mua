let speedXinput = document.querySelector("[name=ax]");
let speedYinput = document.querySelector("[name=ay]");

speedXinput.addEventListener("input", function (e) {
	ax = parseFloat(speedXinput.value);
	console.log(`velocità asse x cambiata --> ${ax}`);
});

speedYinput.addEventListener("input", function (e) {
	ay = parseFloat(speedYinput.value);
	console.log(`velocità asse y cambiata --> ${ay}`);
});
