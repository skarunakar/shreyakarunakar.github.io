let App = {
	openSideDrawer: () => {
		document.getElementsByClassName("sidebar")[0].style.display = "flex";
	},
	closeSideDrawer: () => {
		document.getElementsByClassName("sidebar")[0].style.display = "none";
	}
}
