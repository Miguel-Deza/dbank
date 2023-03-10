import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function () {
	// console.log("Finished Loading");
	// const currentAmount = await dbank.checlBalance();
	// document.getElementById("value").innerText = currentAmount.toFixed(2);
	update();
});

document
	.querySelector("form")
	.addEventListener("submit", async function (event) {
		event.preventDefault();
		// console.log(
		//     "Submitted."
		// );
		const button = event.target.querySelector("#submit-btn");

		const inputAmount = parseFloat(
			document.getElementById("input-amount").value
		);
		const outputAmount = parseFloat(
			document.getElementById("withdrawal-amount").value
		);

		button.setAttribute("disabled", true);

		if (document.getElementById("input-amount").value.length != 0) {
			await dbank.topUp(inputAmount);
		}

		if (document.getElementById("withdrawal-amount").value.length != 0) {
			await dbank.withDraw(outputAmount);
		}

		await dbank.compound();

		update();

		document.getElementById("input-amount").value = "";
		document.getElementById("withdrawal-amount").value = "";
		button.removeAttribute("disabled");
	});

async function update() {
	const currentAmount = await dbank.checlBalance();
	document.getElementById("value").innerText = currentAmount.toFixed(2);
}
