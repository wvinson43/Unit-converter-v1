let initVal = 20
let valEl=document.getElementById("val-el")
valEl.textContent = initVal


let lengthVal = document.getElementById("length-val")
let volumeVal = document.getElementById("volume-val")
let massVal = document.getElementById("mass-val")

let met_feet = (initVal * 3.281).toFixed(3)
let feet_met = (initVal / 3.281).toFixed(3)
let lit_gal = (initVal * 3.785411784).toFixed(3)
let gal_lit = (initVal / 3.785411784).toFixed(3)
let kg_pound = (initVal * 2.2050).toFixed(3)
let pound_kg = (initVal / 2.2050).toFixed(3)

let me=" meters"
let fe=" feet"
let li=" liters"
let ga=" gallons"
let kg=" kilograms"
let po=" pounds"

lengthVal.textContent = `${initVal} ${me} = ${met_feet} ${fe} | ${initVal} ${fe} = ${feet_met}${me}`

volumeVal.textContent = `${initVal} ${ga} = ${gal_lit} ${li} | ${initVal} ${kg} = ${lit_gal} ${ga}`

massVal.textContent = `${initVal} ${po} = ${kg_pound} ${kg} | ${initVal} ${kg} = ${pound_kg} ${po}`

