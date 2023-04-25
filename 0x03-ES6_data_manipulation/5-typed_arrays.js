function createInt8TypedArray(length, position, value){
	if (isNaN(length) || isNaN(position) || isNaN(value)){
		throw "Position outside range";
	}
	else{
		if (position > length){
			throw "Position outside range";
		}
		else{
			const buffer = new ArrayBuffer(length);
			const view = new DataView(buffer);
			view.setInt8(position, value);
			return view;
		}
	}
}
module.exports = createInt8TypedArray;
