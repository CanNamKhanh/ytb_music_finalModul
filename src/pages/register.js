import { authRegister } from "../utils/httpRequest";

const Register = () => {
  return `<div class="m-0 p-0 box-border font-['Roboto',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] -mt-5  w-screen h-screen">
        <div class="flex h-screen">
            <!-- Left Side - Gradient -->
            <div class="h-full hidden md:flex w-1/2 flex-col items-center justify-center text-white p-8 bg-linear-to-br from-red-600 via-orange-500 to-amber-500 fixed">
                <div class="w-32 h-32 flex items-center justify-center mx-auto mb-8">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-32 h-32">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="white"/>
                    </svg>
                </div>
                <h2 class="text-5xl font-bold text-center mb-4">YouTube Music</h2>
                <p class="text-xl text-center opacity-90">Khám phá, nghe nhạc và chia sẻ</p>
            </div>

            <!-- Right Side - Register Form -->
            <div class="h-[132%] w-full md:w-1/2 bg-slate-900 flex items-center justify-center  right-0 absolute">
                <div class="w-full max-w-md animate-fade-in py-8 mt-15">
                    <!-- Header -->
                    <div class="mb-8">
                        <h1 class="text-4xl font-bold text-white mb-2">Đăng Ký</h1>
                        <p class="text-gray-400">Tạo tài khoản YouTube Music của bạn</p>
                    </div>

                    <!-- Register Form -->
                    <form id="registerForm" class="space-y-5">
                        <!-- Name Input -->
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name..."
                                class="w-full px-4 py-3 rounded-lg text-white bg-white/10 border border-white/15 placeholder-white/50 transition-all duration-300 focus:bg-white/20 focus:border-white/30 focus:outline-none"
                                required
                            >
                        </div>
                        

                        <!-- Email Input -->
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                class="w-full px-4 py-3 rounded-lg text-white bg-white/10 border border-white/15 placeholder-white/50 transition-all duration-300 focus:bg-white/20 focus:border-white/30 focus:outline-none"
                                required
                            >
                            <div class="error-message hidden text-red-400 text-sm mt-1" id="emailError"></div>
                        </div>

                        <!-- Password Input -->
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-2">Mật Khẩu</label>
                            <div class="relative">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    class="w-full px-4 py-3 rounded-lg text-white bg-white/10 border border-white/15 placeholder-white/50 transition-all duration-300 focus:bg-white/20 focus:border-white/30 focus:outline-none"
                                    required
                                >
                                <button
                                    type="button"
                                    id="togglePassword"
                                    class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/60 bg-none border-none transition-colors duration-300 hover:text-white/90 p-0"
                                >
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="error-message hidden text-red-400 text-sm mt-1" id="passwordError"></div>
                        </div>

                        <!-- Confirm Password Input -->
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-2">Xác Nhận Mật Khẩu</label>
                            <div class="relative">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    class="w-full px-4 py-3 rounded-lg text-white bg-white/10 border border-white/15 placeholder-white/50 transition-all duration-300 focus:bg-white/20 focus:border-white/30 focus:outline-none"
                                    required
                                >
                                <button
                                    type="button"
                                    id="toggleConfirmPassword"
                                    class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/60 bg-none border-none transition-colors duration-300 hover:text-white/90 p-0"
                                >
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="error-message hidden text-red-400 text-sm mt-1" id="confirmPasswordError"></div>
                        </div>

                        <!-- Terms Checkbox -->
                        <label class="flex items-center space-x-3 text-gray-300 cursor-pointer text-sm">
                            <input type="checkbox" id="agreeTerms" class="w-5 h-5 appearance-none border border-white/30 rounded bg-white/5 cursor-pointer transition-all duration-200 checked:bg-white checked:border-white">
                            <span>Tôi đồng ý với <a href="#" class="text-orange-400 hover:underline">Điều khoản dịch vụ</a></span>
                        </label>

                        <!-- Register Button -->
                        <button
                            type="submit"
                            class="js-submit-btn w-full py-3 rounded-lg font-semibold text-lg mt-6 bg-linear-to-r from-red-600 to-orange-500 text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/40 active:translate-y-0"
                        >
                            Đăng Ký
                        </button>

                        <div class="success-message hidden text-green-500 text-sm mt-3 text-center" id="successMessage">✓ Đăng ký thành công!</div>
                    </form>

                    <!-- Divider -->
                    <div class="flex items-center my-6">
                        <div class="flex-1 h-px bg-white/10"></div>
                        <span class="px-3 text-white/60 text-sm">Hoặc</span>
                        <div class="flex-1 h-px bg-white/10"></div>
                    </div>

                    <!-- Google Register Button -->
                    <button class="w-full py-3 rounded-lg font-medium text-white bg-white/10 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/30">
                        Đăng Ký với Google
                    </button>

                    <!-- Login Link -->
                    <p class="text-center text-gray-400 text-sm mt-6">
                        Đã có tài khoản? <a href="/login" class="text-orange-400 hover:underline font-medium">Đăng nhập</a>
                    </p>
                </div>
            </div>`;
};

export default Register;

export const registerAction = async () => {
  // ELEMENTS
  const registerForm = document.querySelector("#registerForm");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirmPassword");
  const nameInput = document.querySelector("#name");
  const togglePasswordBtn = document.querySelector("#togglePassword");
  const toggleConfirmPasswordBtn = document.querySelector(
    "#toggleConfirmPassword"
  );
  const agreeTermsCheckbox = document.querySelector("#agreeTerms");
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");
  const confirmPasswordError = document.querySelector("#confirmPasswordError");
  const successMessage = document.querySelector("#successMessage");

  // TOGGLE PW
  togglePasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
  });

  // TOGGLE CONFIRM PW
  toggleConfirmPasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const type = confirmPasswordInput.type === "password" ? "text" : "password";
    confirmPasswordInput.type = type;
  });

  // EMAIL VALIDATE
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // PW VALIDATE
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // CLEAR ERR
  emailInput.addEventListener("input", () => {
    emailError.style.display = "none";
  });

  passwordInput.addEventListener("input", () => {
    passwordError.style.display = "none";
  });

  confirmPasswordInput.addEventListener("input", () => {
    confirmPasswordError.style.display = "none";
  });

  // FORM SUBMIT
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let isValid = true;
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const name = nameInput.value;

    // EMAIL VALIDATE
    if (!email) {
      emailError.textContent = "Email là bắt buộc";
      emailError.style.display = "block";
      isValid = false;
    } else if (!validateEmail(email)) {
      emailError.textContent = "Email không hợp lệ";
      emailError.style.display = "block";
      isValid = false;
    }

    // PW VALIDATE
    if (!password) {
      passwordError.textContent = "Mật khẩu là bắt buộc";
      passwordError.style.display = "block";
      isValid = false;
    } else if (!validatePassword(password)) {
      passwordError.textContent = "Mật khẩu phải ít nhất 6 ký tự";
      passwordError.style.display = "block";
      isValid = false;
    }

    // CONFIRM PW VALIDATE
    if (!confirmPassword) {
      confirmPasswordError.textContent = "Vui lòng xác nhận mật khẩu";
      confirmPasswordError.style.display = "block";
      isValid = false;
    } else if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Mật khẩu không khớp";
      confirmPasswordError.style.display = "block";
      isValid = false;
    }

    // VALIDATE TERM
    if (!agreeTermsCheckbox.checked) {
      //   alert("Vui lòng đồng ý với Điều khoản dịch vụ");
      isValid = false;
    }

    if (!isValid) return;

    // AUTH REGISTER
    const res = await authRegister(name, email, password, confirmPassword);

    if (!res) {
      alert("Đăng ký thất bại, vui lòng kiểm tra thông tin");
      return;
    }

    // SAVE TOKEN if response có token
    alert("Đăng ký thành công!");
    registerForm.reset();
    window.location.href = "/login";

    // console.log(email, password, confirmPassword);
  });
};
