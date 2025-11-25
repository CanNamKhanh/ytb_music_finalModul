const accCreate = () => {
  return `<body class="bg-linear-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center p-4">
    <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">        
        <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Tạo Tài Khoản</h1>
                <p class="text-gray-600">Bắt đầu hành trình của bạn</p>
            </div>          
            <form class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="first-name" class="block text-sm font-medium text-gray-700 mb-2">Họ</label>
                        <input 
                            type="text" 
                            id="first-name"
                            placeholder="Nguyễn" 
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            required
                        >
                    </div>
                    <div>
                        <label for="last-name" class="block text-sm font-medium text-gray-700 mb-2">Tên</label>
                        <input 
                            type="text" 
                            id="last-name"
                            placeholder="Văn A" 
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            required
                        >
                    </div>
                </div>              
                <div>
                    <label for="signup-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                        type="email" 
                        id="signup-email"
                        placeholder="your@email.com" 
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        required
                    >
                </div>              
                <div>
                    <label for="signup-password" class="block text-sm font-medium text-gray-700 mb-2">Mật khẩu</label>
                    <input 
                        type="password" 
                        id="signup-password"
                        placeholder="••••••••" 
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        required
                    >
                </div>              
                <div>
                    <label for="confirm-password" class="block text-sm font-medium text-gray-700 mb-2">Xác nhận mật khẩu</label>
                    <input 
                        type="password" 
                        id="confirm-password"
                        placeholder="••••••••" 
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        required
                    >
                </div>              
                <label class="flex items-start mt-6">
                    <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-1">
                    <span class="ml-2 text-sm text-gray-600">
                        Tôi đồng ý với 
                        <a href="#" class="text-indigo-600 hover:text-indigo-700 font-medium">Điều khoản sử dụng</a>
                        và 
                        <a href="#" class="text-indigo-600 hover:text-indigo-700 font-medium">Chính sách bảo mật</a>
                    </span>
                </label>             
                <button 
                    type="submit" 
                    class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 transform hover:scale-105 mt-6"
                >
                    Tạo Tài Khoản
                </button>
            </form>           
            <p class="text-center text-gray-600 mt-6">
                Đã có tài khoản? 
                <span class="text-indigo-600 font-semibold cursor-pointer hover:text-indigo-700">Đăng nhập</span>
            </p>
        </div>
    </div>
</body>`;
};

export default accCreate;
