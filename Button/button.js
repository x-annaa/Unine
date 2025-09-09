// 底部菜单 // 
function showPage(page) {
  // 隐藏所有页面
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));

  // 显示对应页面
  document.getElementById('page' + page).classList.add('active');
}
