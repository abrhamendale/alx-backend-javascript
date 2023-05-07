function createInt8TypedArray(length, position, value) {
  if (Number.isNaN(length) || Number.isNaN(position) || Number.isNaN(value)) {
    throw Error('Position outside range');
  }
  if ((!Number.isNaN(length) && !Number.isNaN(position) &&
	  !Number.isNaN(value)) && (position > length)) {
    throw Error('Position outside range');
  }
  if ((!Number.isNaN(length) && !Number.isNaN(position) &&
	  !Number.isNaN(value)) && (position <= length)) {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    view.setInt8(position, value);
  }
    return view;
}
module.exports = createInt8TypedArray;
