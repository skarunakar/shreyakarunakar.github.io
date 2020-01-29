let App = {
	openSideDrawer: (option) => {
		document.getElementsByClassName("sidebar")[0].style.display = "flex";
		if(option  === "bio") {
			document.getElementsByClassName("bio")[0].style.display = "flex";
		} else {
			document.getElementsByClassName("projects")[0].style.display = "flex";
		}
	},
	closeSideDrawer: () => {
		document.getElementsByClassName("sidebar")[0].style.display = "none";
		document.getElementsByClassName("bio")[0].style.display = "none";
		document.getElementsByClassName("projects")[0].style.display = "none";
	}
}
