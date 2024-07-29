// 96 - masala     ////    Berilgan massiv ichidagi birinchi unik elementni toping.
function firstUnique(arr) {
    let result = arr.reduce((item, num) => {
        item[num] = (item[num] || 0) + 1;
        return item;
    }, {});

    for (let num of arr) {
        if (result[num] === 1) {
            return num;
        }
    }

    return null; 
}

// Test case
// console.log(firstUnique([2, 3, 4, 2, 3, 5, 6, 5])); 
// Output: 4





// 97 - masala    ////     Berilgan satr ichidagi barcha raqamlarni ajratib, tartiblang.
function extractAndSortNumbers(str) {
    let arr = []
    for(let i = 0; i < str.length; i++){
        if (str[i] >= 0) {
            arr.push(+str[i])
        }
    }
    console.log(arr.sort((a,b) => a - b));
}
// Test case
// extractAndSortNumbers("a3c2d4b1"); 
// Output: [1, 2, 3, 4]





// 98 - masala   ////    Berilgan ob'ekt ichidagi barcha qiymatlar son bo'lsa, ularni ikki barobar oshiring.
function doubleNumericValues(obj) {
    for(let key in obj){
        if (typeof obj[key] === 'number') {
           obj[key] *= 2 
        }else if (typeof obj[key] === 'object' && obj[key] !== null) {
            doubleNumericValues(obj[key])
        }
        
    }   
    return obj
 }
 
 // Test case
//  const obj = {
//      a: 1,
//      b: {
//          c: 2,
//          d: {
//              e: 3,
//              f: 4
//          }
//      }
//  };
// console.log(doubleNumericValues(obj));
 // Output: { a: 2, b: { c: 4, d: { e: 6, f: 8 } } }




// 99 - masala     ////     Berilgan ob'ekt ichidagi barcha kalitlarni camelCase formatida qaytaring.
function toCamelCase(obj) {
    const toCamelCaseKey = (str) => {
        return str.replace(/([-_][a-z])/gi, (match) => {
            return match.charAt(1).toUpperCase();
        });
    };

    const convertKeys = (input) => {
        if (typeof input !== 'object' || input === null) {
            return input;
        }

        if (Array.isArray(input)) {
            return input.map(convertKeys);
        }

        return Object.keys(input).reduce((acc, key) => {
            const camelCaseKey = toCamelCaseKey(key);
            acc[camelCaseKey] = convertKeys(input[key]);
            return acc;
        }, {});
    };

    return convertKeys(obj);
}

// Test case
// const obj = {
//     'first_key': 1,
//     'second-key': {
//         'third_key': 2
//     }
// };
//console.log(toCamelCase(obj)); 
// Output: { firstKey: 1, secondKey: { thirdKey: 2 } }





// 100 - masala    ////     Berilgan ob'ekt ichidagi barcha stringlarni berilgan funksiya yordamida o'zgartiring.
function transformStrings(obj, transformFunc) {
    let transform = (input) => {
        if (typeof input === 'string') {
            return transformFunc(input);
        } else if (typeof input === 'object' && input !== null) {
            let result = Array.isArray(input) ? [] : {};
            for (let key in input) {
                if (input.hasOwnProperty(key)) {
                    result[key] = transform(input[key]);
                }
            }
            return result;
        } else {
            return input;
        }
    };

    return transform(obj);
}

// Test case
// const obj = {
//     a: "hello",
//     b: {
//         c: "world",
//         d: {
//             e: "test"
//         }
//     }
// };

// console.log(transformStrings(obj, str => str.toUpperCase())); 
// Output: { a: "HELLO", b: { c: "WORLD", d: { e: "TEST" } } }





// 101 - masala    ////   Berilgan ob'ekt ichidagi barcha kalitlarni sorted tartibda qaytaring.
function sortKeys(obj) {
   let sort_obj = {}
   let key = Object.keys(obj).sort()
   key.forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        sort_obj[key] = sortKeys(obj[key]);
    } else {
        sort_obj[key] = obj[key];
    }
   })
   return sort_obj
}

// Test case
const obj = {
    b: 2,
    a: 1,
    c: 3
};
// console.log(sortKeys(obj)); 
// Output: { a: 1, b: 2, c: 3 }




// 102 - masala    /////    Berilgan massiv ichidagi elementlarni qatorga birlashtiring, faqat takrorlanmaydigan elementlarni saqlang.
function uniqueConcat(arr) {
    let res = []
    arr.forEach((item) => {
        if (!res.includes(item)) {
            res.push(item)
        }
    })
    return res.join("")
}

// Test case
// console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd'])); 
// Output: "abcd"




// 103 - masala    ////    Berilgan massiv ichidagi o'xshash elementlarni toping.
function findDuplicates(arr) {
    let result = arr.reduce((item, num) => {
        item[num] = (item[num] || 0) + 1;
        return item;
    }, {});

    return arr.filter((num, index) => result[num] > 1 && arr.indexOf(num) === index);
}
 
 // Test case
//  console.log(findDuplicates([1, 2, 3, 1, 2, 4])); 
 // Output: [1, 2]



