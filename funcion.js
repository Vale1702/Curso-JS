function calculadora (price, discountP){
   const discount= (price*discountP)/100
   const preciowithdiscount = price - discount

   return preciowithdiscount
}

const originalPrice = 100
const discountP = 20
const finalPrice = calculadora(originalPrice,discountP)

console.log('Original Price: $' + originalPrice)
console.log ('Discount ' + discountP + '%')
console.log ('Price with discount: $' + finalPrice)