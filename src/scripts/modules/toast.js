/**
 * Toast Notification Utility
 */

let toastTimeout;

export function showToast(message, icon = "✓") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span style="color: var(--accent); font-weight: bold;">${icon}</span> <span>${message}</span>`;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}
