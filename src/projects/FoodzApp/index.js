var App = (function() {
	let itemList = [],
		searchList = itemList;
	return {
		getData: function() {
		  itemList = data;
		},
		renderCards: function() {
			let node = document.createElement('div'),
			parent = document.getElementById("cards-parent"),
			imageNode = document.createElement("img"),
            nameNode = document.createElement('div'),
            descNode = document.createElement('div'),
            tagNode = document.createElement('div'),
            rateInfoNode = document.createElement('div'),
            offerNode = document.createElement('div');

            itemList.forEach(item => {
            	imageNode.src = item.image;
            	nameNode.innertext = item.name;
            	node.id.innerText = item.id;
            	descNode.innertext = item.tags;

            })
			parent.appendChild(node);

		},
		search: function(){},
		filter: function(){},
		sort: function(){},
		handleSearch: function(){}
	}
})();