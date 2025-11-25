const Login = () => {
  return `<body class="bg-linear-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center p-4">
    <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">       
        <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Đăng Nhập</h1>
                <p class="text-gray-600">Chào mừng bạn trở lại</p>
            </div>            
            <form class="space-y-5">
                <div>
                    <label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                        type="email" 
                        id="login-email"
                        placeholder="your@email.com" 
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        required
                    >
                </div>              
                <div>
                    <label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mật khẩu</label>
                    <input 
                        type="password" 
                        id="login-password"
                        placeholder="••••••••" 
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        required
                    >
                </div>              
                <div class="flex items-center justify-between">
                    <label class="flex items-center">
                        <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                        <span class="ml-2 text-sm text-gray-600">Nhớ tôi</span>
                    </label>
                    <a href="#" class="text-sm text-blue-600 hover:text-blue-700 font-medium">Quên mật khẩu?</a>
                </div>               
                <button 
                    type="submit" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 transform hover:scale-105"
                >
                    Đăng Nhập
                </button>
            </form>           
            <p class="text-center text-gray-600 mt-6">
                Chưa có tài khoản? 
                <span class="text-blue-600 font-semibold cursor-pointer hover:text-blue-700">Tạo ngay</span>
            </p>
        </div>
</body>`;
};
export default Login;
