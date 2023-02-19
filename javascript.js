let miter_Feet=document.getElementById("miter_Feet")
let liter_Gallons=document.getElementById("liter_Gallons")
let kilo_Pounds=document.getElementById("kilo_Pounds")
let input=document.getElementById("input")
let convert=document.getElementById("convert")
/* 1 meter = 3.281 feet 1 liter = 0.264 gallon 
1 kilogram = 2.204 pound */
let valueOfinput=0;
let meter=0;
let feet=0;
let literr =0
let gallon =0
let kilogram =0
let pound =0


convert.addEventListener("click",function(){
   calculation()
    
    miter_Feet.textContent=`${valueOfinput} meter = ${(meter).toFixed(2)} feet | ${ valueOfinput} feet = ${(feet).toFixed(2) } meters`
    liter_Gallons.textContent=`${valueOfinput} literr = ${(literr).toFixed(2) } gallon | ${ valueOfinput} gallon = ${(gallon).toFixed(2) } literr`
    kilo_Pounds.textContent=`${valueOfinput} kilogram = ${(kilogram).toFixed(2)} pound | ${ valueOfinput} pound = ${ (pound).toFixed(2)} kilogram`
    
    
})

function calculation(){
    valueOfinput =input.value
    meter=valueOfinput*3.281
    feet=valueOfinput*0.3048

    literr =valueOfinput*0.264
    gallon =valueOfinput*3.78541

    kilogram =valueOfinput*2.204
    pound =valueOfinput*0.453592
}