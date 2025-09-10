import { supabase } from "./main.js";

// 添加产品
export async function addProduct() {
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const profit = parseFloat(document.getElementById("profit").value);
  const description = document.getElementById("description").value;
  const url = document.getElementById("url").value;

  const { data, error } = await supabase.from("products").insert([
    { name, price, profit, description, url }
  ]);

  if (error) {
    alert("添加失败: " + error.message);
  } else {
    alert("添加成功!");
    loadProducts();
  }
}

// 获取产品列表
export async function loadProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("加载失败:", error);
    return;
  }

  const productList = document.getElementById("products");
  productList.innerHTML = "";

  data.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${p.name}</strong> - ¥${p.price}  
      <br>利润: ${p.profit}  
      <br>${p.description || ""}  
      <br><a href="${p.url}" target="_blank">查看</a>
    `;
    productList.appendChild(li);
  });
}

// 页面加载时执行
window.onload = loadProducts;
