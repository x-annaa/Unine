function showPage(page) {
  // 隐藏所有页面
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));

  // 显示对应页面
  const target = document.getElementById('page' + page);
  if (target) {
    target.classList.add('active');
  }

  // 更新底部按钮高亮
  const buttons = document.querySelectorAll('.footer button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const activeBtn = Array.from(buttons).find(b => b.textContent === page);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// 初始化高亮第一页按钮
document.addEventListener('DOMContentLoaded', () => {
  const firstBtn = document.querySelector('.footer button');
  if (firstBtn) firstBtn.classList.add('active');
});
