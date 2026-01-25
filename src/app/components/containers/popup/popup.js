export const toastScript = () => {
  const showToast = document.getElementById("openToast");
  const type = showToast.getAttribute("data-type"); 
  const text = showToast.getAttribute("data-text");
  showToast.onclick = () => {
    const container = document.getElementById("toast-container");
    console.log(type, text);
    const types = {
      success: {
        icon: "fa-check-circle",
        color: "text-green-500",
        border: "border-green-500",
        bg: "bg-green-50",
      },
      error: {
        icon: "fa-times-circle",
        color: "text-red-500",
        border: "border-red-500",
        bg: "bg-red-50",
      },
      warning: {
        icon: "fa-exclamation-triangle",
        color: "text-amber-500",
        border: "border-amber-500",
        bg: "bg-amber-50",
      },
      info: {
        icon: "fa-info-circle",
        color: "text-blue-500",
        border: "border-blue-500",
        bg: "bg-blue-50",
      },
    };
    const config = types[type];
    const toast = document.createElement("div");
    toast.className = `flex items-start p-4 rounded-xl border-l-4 shadow-lg transition-all duration-500 transform translate-x-full opacity-0 ${config.bg} ${config.border}`;
    toast.innerHTML = `
                  <div class="flex-shrink-0 ${config.color}">
                      <i class="fas ${config.icon} text-xl"></i>
                  </div>
                  <div class="ml-3 mr-8">
                      <p class="text-center text-md text-gray-800 mt-1">${text}</p>
                  </div>
                  <button onclick="this.parentElement.remove()" class="absolute top-4 right-3 text-gray-400 hover:text-gray-900">
                      <i class="fas fa-times text-xs"></i>
                  </button>
              `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove("translate-x-full", "opacity-0");
      toast.classList.add("translate-x-0", "opacity-100");
    }, 100);
    setTimeout(() => {
      toast.classList.remove("translate-x-0", "opacity-100");
      toast.classList.add("translate-x-full", "opacity-0");
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  };
};
