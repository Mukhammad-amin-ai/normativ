
let maxAge = 18;
let  age = 27;
let height = 170;




let armiya = [ ]

let a = prompt( 'ismizdi kiriting')
if (typeof(a)=='string'){
    armiya.push(a)
    let b = prompt('yoshizdi kiriting')
    if ( ( b >= maxAge )&& (b <= age)){
        armiya.push(b)
        let c = prompt(' buyizdi kiriting')
        if ( c >= height){
        armiya.push(c)
            alert('armiyaga marhamat saldat')
        } else {
            alert('nigodniy')
        }



    } else {
        alert('nigodniy')
    }
}

console.log(armiya);