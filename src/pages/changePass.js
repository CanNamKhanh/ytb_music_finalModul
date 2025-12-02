import { changePassword } from "../utils/httpRequest";

const ChangePassword = async () => {
  return `<div class="text-white via-gray-900 to-gray-800 mt-[55px]">
        <!-- Updated background to darker burgundy/maroon tone to match the reference image -->
        <div class="max-w-6xl mx-auto px-6 py-12">
            <div class="bg-linear-to-b from-red-600/10 to-transparent rounded-3xl p-8 md:p-12 mb-12 flex gap-8 h-screen">

                <!-- Profile Info and Form Section -->
                <div class="flex-1 w-full">
                    <!-- Edit Form -->
                    <form class="space-y-6 mb-8">
                        <div>
                            <label for="old-pass" class="block text-sm font-medium mb-2 text-slate-200 uppercase tracking-wider">Mật khẩu hiện tại</label>
                            <input 
                                type="text" 
                                id="old-pass" 
                                name="fullname" 
                                class="js-old-pass-input w-full px-4 py-3 bg-white bg-opacity-8 border border-white border-opacity-15 rounded-lg text-black text-base placeholder-slate-500 transition-all duration-300 focus:outline-none focus:bg-opacity-12 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-30"
                            />
                            <p class="text-xs text-slate-500 mt-1.5">Vui lòng nhập đúng mật khẩu hiện tại</p>
                        </div>
    
                        <div>
                            <label for="new-pass" class="block text-sm font-medium mb-2 text-slate-200 uppercase tracking-wider">Nhập mật khẩu mới</label>
                            <input
                                type="email" 
                                id="new-pass" 
                                name="email" 
                                class="js-new-pass-input text-black w-full px-4 py-3 bg-white bg-opacity-8 border border-white border-opacity-15 rounded-lg text-base placeholder-slate-500 transition-all duration-300 focus:outline-none focus:bg-opacity-12 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-30"
                            />
                        </div>
    
                        <div>
                            <label for="confirm-new-pass" class="block text-sm font-medium mb-2 text-slate-200 uppercase tracking-wider">Nhập lại mật khẩu mới</label>
                            <input
                                type="email" 
                                id="confirm-new-pass" 
                                name="email" 
                                class="js-confirm-new-pass-input text-black w-full px-4 py-3 bg-white bg-opacity-8 border border-white border-opacity-15 rounded-lg text-base placeholder-slate-500 transition-all duration-300 focus:outline-none focus:bg-opacity-12 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-30"
                            />
                            <p class="js-warning-pass text-xs text-red-500 mt-1.5"></p>
                        </div>
                    </form>
    
                    <!-- Buttons Section -->
                    <div class="flex gap-4 flex-wrap">
                        <!-- Updated button styles to match YouTube Music design with red primary and outlined secondary buttons -->
                        <button type="submit" class="cursor-pointer js-change-btn px-8 py-3 rounded-full font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105">
                            Xác nhận
                        </button>
                        <button type="button" class="cursor-pointer js-logout-btn px-8 py-3 rounded-full font-semibold text-white border border-gray-400/30 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300">
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
};

export const changeSubmit = async () => {
  // CHECK CONFIRM PASSWORD
  const confirmPasswordInput = document.querySelector(
    ".js-confirm-new-pass-input"
  );
  confirmPasswordInput.addEventListener("blur", () => {
    const password = document.querySelector(".js-new-pass-input").value;
    const confirmPassword = document.querySelector(
      ".js-confirm-new-pass-input"
    ).value;
    const confirmPasswordError = document.querySelector(".js-warning-pass");
    // console.log(password);
    // console.log(confirmPassword);

    const checkPasswordMatch = () => {
      if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Mật khẩu không khớp";
        confirmPasswordError.style.display = "block";
      }
    };
    checkPasswordMatch();
  });

  const updateBtn = document.querySelector(".js-change-btn");
  updateBtn.addEventListener("click", async (e) => {
    const oldPassword = document.querySelector(".js-old-pass-input").value;
    const password = document.querySelector(".js-new-pass-input").value;
    const confirmPassword = document.querySelector(
      ".js-confirm-new-pass-input"
    ).value;
    // console.log(password, confirmPassword);

    await changePassword(oldPassword, password, confirmPassword);
  });
};

export default ChangePassword;
