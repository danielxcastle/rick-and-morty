
const getState = ({ getStore, getActions, setStore }) => {
	return {


		store: {

			characters:[],
			characterIdForCharacters: [],
			locations: [],
			episodes: [],
			favoritesList: []
		},
		actions: {
			addFavorite: (item) => {
				if(getStore().favoritesList.map((favorite) => {
					return favorite.name
				}).includes(item.name)){					 
				} else {
				setStore({
					favoritesList: [
						...getStore().favoritesList,
						item
					]}
				)}},
			removeFavorites: (item) => {
				const updatedFavoritesList = getStore().favoritesList.filter((favorite) => !(favorite.id === item.id && favorite.name === item.name));
				setStore({
					favoritesList: updatedFavoritesList
				});
				}
			,
			getEpisodes: () => {
				fetch(
					"https://rickandmortyapi.com/api/episode/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
				)
				.then((response) => {
				  if (response.ok) {
					return response.json();
				  
				}
			})
				.then((body) => {
					setStore({
						episodes: body
					});
				});
			},

			getCharacters: () => {
				fetch(
					"https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
				)
				.then((response) => {
				  if (response.ok) {
					return response.json();
				  
				}
			})
				.then((body) => {
					setStore({
						characters: body
					});
				});
			},
			getLocations: () => {
				fetch(
					"https://rickandmortyapi.com/api/location/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
				)
				.then((response) => {
				  if (response.ok) {
					return response.json();
				  
				}
			})
				.then((body) => {
					setStore({
						locations: body
					});
				});
			},
			// Use getActions to call a function within a fuction
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
