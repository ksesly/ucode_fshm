module.exports =  { firstUpper(str) {
		let result;
		if (str == undefined|null)
			result = "";
		else {
			let temp = str.trim().toLowerCase();
			temp = temp.charAt(0).toUpperCase() + temp.slice(1);
			result = temp;
		}
		return result;
    }
}