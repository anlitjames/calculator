function display(num) {
    
    result.value+=num
}
function clearAll(){
    result.value=""
}
function output()
{
 result.value=  eval( result.value)
}
function removeLast()
{
    result.value=(result.value).slice(0,-1)
}