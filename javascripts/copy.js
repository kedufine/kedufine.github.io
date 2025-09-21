// docs/js/copy.js
function showToast(message) {
  let toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "rgba(0,0,0,0.8)";
  toast.style.color = "#fff";
  toast.style.padding = "8px 16px";
  toast.style.borderRadius = "4px";
  toast.style.fontSize = "14px";
  toast.style.zIndex = "9999";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.5s";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 1200);
}

document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-copy]");
  if (!btn) return;

  const selector = btn.getAttribute("data-copy");
  const el = document.querySelector(selector);
  if (!el) return;

  const prefix = btn.getAttribute("data-prefix") || "";
  const text = prefix + (el.innerText || el.textContent || "");

  try {
    await navigator.clipboard.writeText(text);
    console.log("복사됨:", text);
    showToast("복사되었습니다");
  } catch (err) {
    console.error("복사 실패", err);
    showToast("복사 실패");
  }
});
