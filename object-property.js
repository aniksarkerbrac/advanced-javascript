const students = [
    {id:21, name: 'Omor Sunny'},
    {id:31, name: 'Mannaa'},
    {id:41, name: 'Moyouri'},
    {id:71, name: 'Deepjol'}
]

const name = students.map( s => s.name);
const id = students.map( s => s.id);
const biggerId = students.filter( s => s.id>40);
console.log(id);