export default function divideFunction(numerator, denominator) {
	const err = new Error("cannot divide by 0");
	try{
		if (denominator == 0){
			throw err;
		}
		return (numerator/denominator);
	}
	catch(e){
		console.error(e);
	}
}
