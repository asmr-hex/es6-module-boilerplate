
export function test() { 
    console.log(
	(()=>{return "this worked!"})()
    )
}


export class TestClass {
    constructor(...args) {
	this.myVars = ["a", "b"]
	console.log((()=>{return "yo"})())
    }
    
    // default generator method
    * [Symbol.iterator]() {
	for (let myVar of this.myVars) {
	    yield myVar;
	}
    }
}
