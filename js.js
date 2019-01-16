var el = document.getElementById ('calc')
el.addEventListener('click', square)
function square () {
  var length =+ document.getElementById('length').value
  var width =+ document.getElementById('width').value
  var height=+ document.getElementById('height').value
  if (length> 0 && width > 0 && height > 0 ){
    var squareWalls = 2*((width*height)+(length*height))
    document.getElementById('squareWalls').innerHTML = squareWalls
        document.getElementById('givenlength').innerHTML = length
    document.getElementById('givenwidth').innerHTML = width
    document.getElementById('givenheight').innerHTML = height
        
  } else {
    alert('Ошибка при вводе координат!')
    }
}