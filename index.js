
const _stackArray=new WeakMap() // Private it not assibile - Abstraction
class Stack{
    constructor(){
        _stackArray.set(this,[]); // setter the value
    }
    peek(){
        const items=_stackArray.get(this);
        if(items.length ==0) throw new Error('empty stack'); // error
        return items[items.length-1];
    }
    push(item){
        const items=_stackArray.get(this);
        items.push(item);
    }
    pop(){
        const items=_stackArray.get(this);
        if(items.length ==0) throw new Error('empty stack');
        items.pop();
    }
    get count(){// getter
        return _stackArray.get(this).length 
    }
}
const d=new Stack(); //new fun instance