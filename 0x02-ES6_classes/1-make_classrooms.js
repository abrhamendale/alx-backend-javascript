import ClassRoom from "./0-classroom.js"

export default function initializeRooms() {
	let c = [];
	c.push(new ClassRoom(19));
	c.push(new ClassRoom(20));
	c.push(new ClassRoom(34));

	return c;
}
