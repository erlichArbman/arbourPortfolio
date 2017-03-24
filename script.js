function test() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var comment = document.getElementById('comment').value;
  var node = document.getElementById('list');
  var item = document.createElement('li');
  var text = document.createTextNode('test');
  item.appendChild(text);
  node.appendChild(item);
  return false;
}
