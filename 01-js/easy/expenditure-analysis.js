/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let res=[];
  let updated={
    catagoty:"",
    totalspent:0
  }
  let mp=new Map();
  transactions.forEach(element => {
    let key=element.category;
    let val=element.price;
    if(mp.get(key) == undefined){
      mp.set(key,val);
    }
    else{
      mp.set(key,mp.get(key)+val);
    }
  });
  console.log(mp);
  for(const [key,value] of mp){
    res.push({category:key, totalSpent:value});  
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
