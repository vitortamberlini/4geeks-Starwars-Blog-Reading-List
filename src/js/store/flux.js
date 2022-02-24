const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [
				{
					title: "Henlô! (2)",
					id: 23,
					type: "character"
				},
				{
					title: "Henlô! (1)",
					id: 108,
					type: "character"

				},
				{
					title: "Henlô! (3)",
					id: 430,
					type: "character"

				}
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getFavoritesLength: () => {
				return getStore().favorites.length;
			},
			addFavorite: (title, type) => {
				const newStore = getStore();
				let newId = 1;

				if (newStore.favorites.length > 0) {
					const initialAccumulator = newStore.favorites[0].id;
					newId = newStore.favorites.reduce((highestId, favorite) => favorite.id > highestId ? favorite.id : highestId, initialAccumulator) + 1;
				}

				const newFavorite = {title: title, id: newId, type: type};
				
				newStore.favorites.push(newFavorite);
				
				setStore(newStore);

			},
			removeFavorite: (id) => {
				const newStore = getStore();
				const newFavorites = newStore.favorites.filter(item => item.id != id);
				
				newStore.favorites = newFavorites;

				setStore(newStore);
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
