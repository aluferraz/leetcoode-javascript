let input = [5,1,2,3,null,6,4]


let result = [];
let varName = 'root';
result.push(`let root;`);



function buildCommands(input, result) {
    pos = 0
    let queue = [['root',0]]
    while (queue.length > 0) {
        let [varName,idx] = queue.shift();
        if(input[idx] !== null ) { 
            result.push(`${varName} = new TreeNode(${input[idx]});`);
            pos++;if(pos < input.length) queue.push([varName + '.left',pos]);
            pos++;if(pos < input.length) queue.push([varName + '.right',pos]);
        }
    }
    return result.sort();
}


console.log(buildCommands(input, result).join("\n"));