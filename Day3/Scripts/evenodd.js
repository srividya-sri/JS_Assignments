let checkEven=function(n)
{
    if(n%2==0)
    {
        return `The number entered is ${n} and Number is even`
    }
    else
    {
        return `The number entered is ${n} and Number is odd`
    }
}
let num=prompt("enter number")
console.log(checkEven(num))