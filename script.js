function commenter () {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var comment = document.getElementById('comment');
  var list = document.getElementById('list');
  var item = document.createElement('li');
  item.innerHTML = '<em>' + comment.value + '</em> - ' + name.value + ' (' + email.value + ')';
  list.appendChild(item);
  name.value = "";
  email.value = "";
  comment.value = "";
  return false;
}
