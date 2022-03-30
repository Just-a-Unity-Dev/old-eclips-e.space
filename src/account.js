// Account.js handles account.html, or display of accounts
// Accounts.js handles creation of new accounts

async function check() {
	const searchbar = document.getElementById("searchbar")
	const username = searchbar.value;
	
	const api = document.location.href + `/../api/accounts/user/${username}`

	if (username == null) {
		return {error: "No username entered", status: 400};
	}

    await fetch(api)
	.then(res => {
		res.json().then(data => {
			const error_p = document.getElementById("error_p")
			const lookup = document.getElementById("lookup")

			if (data.error != null) {
				lookup.style.display = "none"
				error_p.textContent = "Unknown user"
				return console.log("nonexistent user")
			}
			
			error_p.textContent = ""
			lookup.style.display = "block"
			document.getElementById("username").textContent = data.username
			document.getElementById("profile-picture").src = data.profile_pic
			document.getElementById("bio").textContent = data.bio
			document.getElementById("hearts").textContent = data.hearts
		})
	})
}

document.getElementById("searchbutton").addEventListener('click', (e) => {
	e.preventDefault();
	console.log("trolli")
	check();
});
