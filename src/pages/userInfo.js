import { getProfile, logout } from "../utils/httpRequest";

const UserInfo = async () => {
  const data = await getProfile();
  console.log(data);
  return `<div class="text-white via-gray-900 to-gray-800 mt-[55px] h-screen">
            <!-- Main Content -->
            <div class="max-w-6xl mx-auto px-6 py-12">
                <!-- Profile Header Background -->
                <div class="bg-linear-to-b from-red-600/10 to-transparent rounded-3xl p-8 md:p-12 mb-12">
                    <!-- Profile Info Section -->
                    <div class="flex flex-col md:flex-row gap-8 md:gap-12">
                        <!-- Avatar -->
                        <div class="flex shrink-0">
                            <img 
                                src="https://i.imgflip.com/g92vw.jpg?a489648" 
                                alt="Avatar" 
                                class="w-48 h-48 rounded-full object-cover shadow-lg shadow-black/30"
                            >
                        </div>
                        <!-- Profile Details -->
                        <div class="flex-1 flex flex-col justify-center">
                            <p class="text-gray-400 text-sm font-medium mb-2">Thông tin cá nhân</p>
                            <h1 class="text-5xl font-bold mb-4">${data.name}</h1>
                            <h3 class="text-2xl font-bold mb-4">${data.email}</h3>
                            <p class="text-2xl text-gray-300 mb-6">Music Lover • Người yêu âm nhạc</p>
                            <p class="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
                                Đam mê khám phá âm nhạc từ khắp nơi trên thế giới. Yêu thích các thể loại từ pop, rock, jazz đến lo-fi chill beats.
                            </p>
                            <!-- Action Buttons -->
                            <div class="flex flex-wrap gap-4">
                                <a href="/update-info" class="cursor-pointer px-8 py-3 rounded-full font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105">
                                    Chỉnh sửa hồ sơ
                                </a>
                                <button class="cursor-pointer px-8 py-3 rounded-full font-semibold text-white border border-gray-400/30 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300">
                                    Chia sẻ hồ sơ
                                </button>
                                <a href="/change-pass" class="cursor-pointer px-8 py-3 rounded-full font-semibold text-white border border-gray-400/30 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300">
                                    Đổi mật khẩu
                                </a>
                                <button class="js-logout-btn cursor-pointer px-8 py-3 rounded-full font-semibold text-white border border-gray-400/30 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300">
                                    Đăng xuất
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
};
export default UserInfo;
