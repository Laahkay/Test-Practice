getHighestNumber =(array) =>{

    return array[3]
    
    }
    
    console.log(getHighestNumber([1, 3 , 10 , 12]))
    
    // should return 12
    
    
    
    
     const calculateSumOfList = (array) => {
      return array.map(item => item.score).reduce((a, b) => a + b);
    }
    
    // 2
     console.log(calculateSumOfList([{score: 1 } ,{score: 2} ,{score: 5} , {score: 6} ,{score: 5}])) 
    //  should return 19
    
    
    
    removeObjectBasedOnId = (array , id) =>{
        const removedObj = array.findIndex((remove) => remove.id === id);
        array.splice(removedObj, 1);
      
        return array;
    
    }
    3
     console.log(removeObjectBasedOnId([{id:1 , name:'rocky'} , {id:2 , name:'smith'},{id:3 , name:'thabo'}] , 2)) 
    // should return [{id:1 , name:'rocky'},{id:3 , name:'thabo'}]
    
    
    var removeAllStrings =(array)=>{
    var removed = array.splice(1,3,2);
    return removed
    }
    4 
    console.log(removeAllStrings(['b' , 11 , 'smith', 2 , 'van' , 88, 22])) 
    
    // should return [11 , 2 , 88 , 22]
    
    
    getTotalTwins =(array) =>{
     
    }
    
    5 
    console.log(getTotalTwins([1 , 3 , 'b' , 'b' , 2 , 'w' , 1 , 1])) 
    // should return 2
    
    
     createArrayBasedOnNumber =(value) =>{
       
     Array.from(Array(value).keys(11))
     
     }
    
    
    //6 
    console.log(createArrayBasedOnNumber(11)) 
    // should return [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
    
    
    
     const addItemBeginOfList = (array , value) => {
         
        return array = [value, ...array]
            
     }
            
    7 
    console.log(addItemBeginOfList([2 , 4 , 6], 5))
    //  should return [5 , 2 , 4 , 6]
    
    
    