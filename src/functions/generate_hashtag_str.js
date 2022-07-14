export const generateHashtagStr = (oldTags) => {
	let tags = [...oldTags];
	let mixed = [];

	tags.forEach((e) => {
		let index = Math.floor(Math.random() * tags.length);
		mixed = [...mixed, tags[index]];
		tags = tags.filter((tag) => tag !== tags[index]);
	});

	let tagsStr = "#" + mixed[0];

	for (let i = 0; i < mixed.length; i++) {
		tagsStr += ", #" + mixed[i];
	}

	return tagsStr;
};
