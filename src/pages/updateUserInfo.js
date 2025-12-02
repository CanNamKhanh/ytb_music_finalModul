import { getProfile, updateInfo } from "../utils/httpRequest";

const UpdateUserInfo = async () => {
  const data = await getProfile();

  return `<div class="text-white via-gray-900 to-gray-800 mt-[55px]">
    <!-- Updated background to darker burgundy/maroon tone to match the reference image -->
    <div class="max-w-6xl mx-auto px-6 py-12">
        <div class="bg-linear-to-b from-red-600/10 to-transparent rounded-3xl p-8 md:p-12 mb-12 flex gap-8">
            <!-- Profile Picture Section -->
            <div class="flex flex-col md:flex-row gap-8 md:gap-12">
                <div class="flex shrink-0">
                    <img 
                        src="https://i.imgflip.com/g92vw.jpg?a489648" 
                        alt="Avatar" 
                        class="w-48 h-48 rounded-full object-cover shadow-lg shadow-black/30"
                    >
                </div>
            </div>

            <!-- Profile Info and Form Section -->
            <div class="flex-1 w-full">
                <!-- Added profile header with name, email and bio inspired by YouTube Music layout -->
                <div class="mb-10">
                    <p class="text-xs text-slate-400 uppercase tracking-widest mb-3">Thông tin cá nhân</p>
                    <h1 class="text-4xl lg:text-5xl font-bold text-white mb-3">${data.name}</h1>
                    <p class="text-3xl md:text-2xl font-bold mb-4">${data.email}</p>
                    <p class="text-sm text-slate-400 mb-2">Music Lover • Người yêu âm nhạc</p>
                    <p class="text-sm text-slate-400 leading-relaxed max-w-xl">Đam mê khám phá âm nhạc từ khắp nơi trên thế giới. Yêu thích các thể loại từ pop, rock, jazz đến lo-fi chill beats.</p>
                </div>

                <!-- Edit Form -->
                <form class="space-y-6 mb-8">
                    <div>
                        <label for="fullname" class="block text-sm font-medium mb-2 text-slate-200 uppercase">Họ và tên</label>
                        <input 
                            type="text" 
                            id="fullname" 
                            name="fullname" 
                            placeholder="Nhập họ và tên của bạn"
                            value="${data.name}"
                            class="js-name-input w-full px-4 py-3 bg-white bg-opacity-8 border border-white border-opacity-15 rounded-lg text-black text-base placeholder-slate-500 transition-all duration-300 focus:outline-none focus:bg-opacity-12 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-30"
                        />
                        <p class="text-xs text-slate-500 mt-1.5">Tên của bạn sẽ hiển thị trên hồ sơ công khai</p>
                    </div>

                    <div>
                        <label for="email" class="text-sm font-medium mb-2 text-slate-200 uppercase block">Địa chỉ email</label>
                        <input
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Nhập địa chỉ email"
                            value="${data.email}"
                            class="js-email-input text-black w-full px-4 py-3 bg-white bg-opacity-8 border border-white border-opacity-15 rounded-lg text-base placeholder-slate-500 transition-all duration-300 focus:outline-none focus:bg-opacity-12 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-30"
                        />
                        <p class="text-xs text-slate-500 mt-1.5">Chúng tôi sẽ gửi xác nhận đến email này</p>
                    </div>
                </form>

                <!-- Buttons Section -->
                <div class="flex gap-4 flex-wrap">
                    <!-- Updated button styles to match YouTube Music design with red primary and outlined secondary buttons -->
                    <button type="submit" class="cursor-pointer js-update-btn px-8 py-3 rounded-full font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105">
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

export default UpdateUserInfo;

export const updateSubmit = async () => {
  const updateBtn = document.querySelector(".js-update-btn");
  updateBtn.addEventListener("click", async (e) => {
    const name = document.querySelector(".js-name-input").value;
    const email = document.querySelector(".js-email-input").value;
    // console.log(name, email);
    await updateInfo(name, email);
  });
};
