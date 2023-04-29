export default function uploadPhoto(filename){
	return new Promise(function(resolve, reject){
		//resolve({"firstName": firstName, "lastName": lastName});
		reject(Error("cannot be processed", {fileName: filename}))
	});
}
