import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const c = [];
  c.push(new ClassRoom(19));
  c.push(new ClassRoom(20));
  c.push(new ClassRoom(34));
  return c;
}
