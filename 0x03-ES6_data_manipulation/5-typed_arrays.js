function createInt8TypedArray(length, position, value){
  let view = 0;
  let buffer = 0;
  if (Number.isNaN(length) || Number.isNaN(position) || Number.isNaN(value)) {
    throw Error('Position outside range');
  }
  if ((!Number.isNaN(length) && !Number.isNaN(position)
    && !Number.isNaN(value)) && (position > length)) {
    throw Error('Position outside range');
  }
  if ((!Number.isNaN(length) && !Number.isNaN(position)
    && !Number.isNaN(value)) && (position <= length)) {
    buffer = new ArrayBuffer(length);
    view = new DataView(buffer);
    view.setInt8(position, value);
    return view;
  }
}
module.exports = createInt8TypedArray;
