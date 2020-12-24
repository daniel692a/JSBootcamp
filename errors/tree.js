const maxChildren = (tree) => {
    let levelOne = tree.children;
    for (const i of levelOne) {
        for (const key in i) {
            console.log(i[key]);
        }
    }
    return 0;
};
const tree = {
    value: 'a',
    children: [],
}
tree.children.push({value: 'b', children: [
    {value: 'd', children: []},
    {value: 'e', children: []},
    {value: 'f', children: []},
]});
tree.children.push({value: 'c', children: [
    {value: 'g', children: []},
    {value: 'h', children: []},
]});

console.log(maxChildren(tree));