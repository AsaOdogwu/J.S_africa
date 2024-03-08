const my_Life =["joy","happiness","love","peace"]
const mi_amor =my_Life.map((bae,index)=>{
    let mappedItem =`${bae} =${index}`
    return mappedItem
})
// console.log(mi_amor)
// filter method()
const words=['spray','elite','exuberant','destruction','present'];
// length Method
const result =words.filter((word,index)=>word.length>6);
// console.log(result)
// console.log(result.length)

const numbers = [1,5,2,8,12,17,10];

const my_Num =numbers.filter((number)=>number>10);
// console.log(my_Num)

const ike_chukwu =[1,2,3,4,5,6,7,8,9,10];
const figure = ike_chukwu.filter((num) => num % 2==0);
// console.log(figure)

// Map methods

const my_array =["filler","BBL","zazu","aka","ika,","tesodua"]
let all_array = my_array.map((all_items, index)=>{
    let mapped_out_Items = `${all_items} = ${index}`
    return mapped_out_Items
})
// console.log(all_array)

// Using index in mapping
// let ja_quar =["kosisochukwu","Somto", "Ike", "Buhari", "Vic", "Tochukwu"]
// let result = ja_quar.map((items, index) => {
//     let mappedItem = `${items} = ${index}`
//     return mappedItem
// })
// console.log(result)

// MAP METHODS USING FOR EACH
const hdsStudents = ["Ezekiel","Theresa","Kosi", "koach"];

function mycallBackfn(name,idx,initialArray){
    // console.log(name)
    // console.log(name,idx,initialArray)
    
}
// hdsStudents.forEach(function(name,idx,initialArray){
//     console.log(initialArray)
// });
hdsStudents.forEach((name,idx,initialArray)=>{
    // console.log(initialArray)
});
// hdsStudents.forEach(mycallBackfn);

// Using map method
// console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n")

const APSstudents = ["Ezekiel","Theresa","Kosi", "koach"]
function APSCallbackfn(name,idx,initialArray){
 if (idx == 0){
        return name.toLowerCase();
  } 

if(idx == initialArray.length-1){
     return name.toUpperCase();
  }
 return {value:name};
 }

// console.log(APSstudents.map(APSCallbackfn));





// const newValue=APSstudents.map((name,index,myArray)=>{
//     if(index == 0){
//         return name.toLowerCase();
//     }
//     if(index == myArray.length-1){
//         return name.toUpperCase();
//     }
//         return {value:name};
    
// })
// // console.log(newValue);

const my_list =["faith","cletus","fortune","david"]
function namies(name,index,array){
    if (index == 0){
        return name.toUpperCase();
    }
    if (index == array.length -2){
    return name.toUpperCase();
}

}
// console.log(my_list.map(namies));


const group_5 = ["clara","silas","victor"]
function all_of_dem(name,array,idx){
    if(name == "clara"){
        return {
            name,
            status: "active",
        } 

    }
    return {
        name,
        status: "inactive",
    }
    

}
// console.log(group_5.map(all_of_dem));

group_5.forEach((name,array,idx)=>{
    if (name == "clara"){
        return {
            name,
            status: "active",
        }
    } 
    return {
        name,
        status: "inactive",
    }
});
let my_data = group_5.forEach(all_of_dem);
// console.log(my_data)

// OR THE FOREACH METHOD
let stuffs = [];
// group_5.forEach((name)=>{
//     if (name == "clara"){
//         stuffs.unshift({
//             name:"name",
//             status: "active",
//         });
//         return;
//     } 
//     stuffs.push ({
//         name: "name",
//         status: "inactive",
// });
// })
// console.log(stuffs);

item_lists = ["aeroplane","pilot","car","driver","mother","kitchen"]
function house_matas(){
    if(item_lists = "mother"){
        return {
            name:"mother",
            Obligation:"taking care of children",
        };
    };
if (item_lists == "papi") {
    return {
        name:"pilot",
        Obligation:"Drive the aeroplane",
    };
    
} 


};
Every_house = item_lists.map(house_matas)
console.log(Every_house)

// Unshift method
const array2 = [2,3,4,5];
array2.unshift(1);
console.log(array2)

// pull method
const array3 = [1,2,3,4,5];
constIndexarray = 3;

array3.splice(constIndexarray,1);
console.log(array3);
