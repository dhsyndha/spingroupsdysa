export function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
export function generateGroups(studentList, topicList, totalGroup) {
    if (totalGroup <= 0) {
    return [];
  }
  const students = shuffle(studentList);
  const topics = shuffle(topicList);
  const result = [];

  for (let i = 0; i < totalGroup; i++) {
    result.push({
      id: i + 1,
      topic: topics[i % topics.length],
      members: [],
    });
  }
  students.forEach((student, index) => {

    result[index % totalGroup].members.push(student);
  });
  return result;
}