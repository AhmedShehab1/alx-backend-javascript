import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  sizes = [19, 20, 34];
  classRooms = [];

  for (size of sizes) {
    classRooms.push(ClassRoom(size));
  }
  return classRooms;
}
