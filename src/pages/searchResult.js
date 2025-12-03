const SearchResult = () => {
  return `<body class="bg-black text-white">
  <div class="max-w-7xl mx-auto px-5">
    <!-- Header -->
    <div class="flex items-center gap-10 border-b border-gray-700 pb-5 mb-8 flex-col md:flex-row">
      <div>
        <div class="text-xl font-semibold tracking-widest">YT MUSIC</div>
        <div class="h-0.5 w-10 bg-white mt-1"></div>
      </div>
      <a class="text-gray-500 text-sm hover:text-white transition-colors cursor-pointer">LIBRARY</a>
    </div>

    <!-- Search Section -->
    <div class="mb-10">
      <div class="flex items-center gap-4 bg-gray-800 rounded-full px-4 py-2 w-full max-w-md mb-8">
        <span class="text-gray-500 text-lg">🔍</span>
        <input type="text" placeholder="Search songs, artists, albums..." class="bg-transparent w-full text-white outline-none placeholder-gray-600 text-sm">
      </div>

      <!-- Tabs -->
      <div class="flex gap-2 overflow-x-auto pb-2">
        <button class="bg-white text-black px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition-colors">Songs</button>
        <button class="bg-gray-700 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-600 transition-colors">Videos</button>
        <button class="bg-gray-700 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-600 transition-colors">Artists</button>
        <button class="bg-gray-700 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-600 transition-colors">Albums</button>
        <button class="bg-gray-700 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-600 transition-colors">Episodes</button>
        <button class="bg-gray-700 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-600 transition-colors">Community playlists</button>
        <button class="bg-gray-700 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-600 transition-colors">Profiles</button>
        <button class="bg-gray-700 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-600 transition-colors">Podcasts</button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <!-- Left Panel: Artist Profile -->
      <div class="bg-gray-900 rounded-lg p-8 text-center">
        <div class="w-32 h-32 rounded-full bg-gray-700 mx-auto mb-5 flex items-center justify-center text-5xl">🎤</div>
        <h2 class="text-3xl font-bold mb-2">Vũ</h2>
        <p class="text-gray-500 text-sm mb-6">Artist · 3.03M monthly audience</p>
        <div class="flex gap-3 justify-center">
          <button class="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-200 hover:scale-105 transition-all">
            <span>🔀</span> Shuffle
          </button>
          <button class="bg-gray-700 text-white px-6 py-2 rounded-full text-sm border border-gray-600 flex items-center gap-2 hover:bg-gray-600 transition-colors">
            <span>🎙️</span> Mix
          </button>
        </div>
      </div>

      <!-- Right Panel: Search Results -->
      <div class="md:col-span-2 space-y-4">
        <div class="bg-gray-800 rounded p-4 flex gap-4 hover:bg-gray-700 transition-colors cursor-pointer">
          <div class="w-20 h-20 bg-gray-700 rounded shrink-0 flex items-center justify-center text-3xl">🎵</div>
          <div>
            <div class="font-semibold text-base">Bình Yên</div>
            <div class="text-gray-500 text-sm">Song · Vũ & Binz · 3:22 · 80M plays</div>
          </div>
        </div>

        <div class="bg-gray-800 rounded p-4 flex gap-4 hover:bg-gray-700 transition-colors cursor-pointer">
          <div class="w-20 h-20 bg-gray-700 rounded shrink-0 flex items-center justify-center text-3xl">🎵</div>
          <div>
            <div class="font-semibold text-base">Nếu Những Tiếc Nuối</div>
            <div class="text-gray-500 text-sm">Song · Vũ · 4:21 · 11M plays</div>
          </div>
        </div>

        <div class="bg-gray-800 rounded p-4 flex gap-4 hover:bg-gray-700 transition-colors cursor-pointer">
          <div class="w-20 h-20 bg-gray-700 rounded shrink-0 flex items-center justify-center text-3xl">🎵</div>
          <div>
            <div class="font-semibold text-base">Mưa Mưa Ấy</div>
            <div class="text-gray-500 text-sm">Song · Vũ · 3:49 · 3.1M plays</div>
          </div>
        </div>

        <div class="bg-gray-900 rounded p-3 flex gap-3 hover:bg-gray-800 transition-colors cursor-pointer items-center">
          <div class="w-15 h-15 bg-gray-700 rounded shrink-0 flex items-center justify-center text-2xl">🎵</div>
          <div class="flex-1">
            <div class="font-semibold text-sm">Những Lời Hứa Bỏ Quên</div>
            <div class="text-gray-500 text-xs">Song · Vũ & Dear Jane · 81M plays</div>
          </div>
          <div class="w-10 h-10 bg-gray-700 rounded-full text-white flex items-center justify-center shrink-0">▶</div>
        </div>

        <div class="bg-gray-900 rounded p-3 flex gap-3 hover:bg-gray-800 transition-colors cursor-pointer items-center">
          <div class="w-15 h-15 bg-gray-700 rounded shrink-0 flex items-center justify-center text-2xl">🎬</div>
          <div class="flex-1">
            <div class="font-semibold text-sm">Vũ. Live Các Hit Mới Nhất 2025</div>
            <div class="text-gray-500 text-xs">Video · Đêm Nhạc Đặc Biệt · 2M views</div>
          </div>
          <div class="w-10 h-10 bg-gray-700 rounded-full text-white flex items-center justify-center shrink-0">▶</div>
        </div>

        <div class="bg-gray-900 rounded p-3 flex gap-3 hover:bg-gray-800 transition-colors cursor-pointer items-center">
          <div class="w-15 h-15 bg-gray-700 rounded shrink-0 flex items-center justify-center text-2xl">🎬</div>
          <div class="flex-1">
            <div class="font-semibold text-sm">Lạ Lùng, Bình Yên, Nếu Những Tiếc Nuối...</div>
            <div class="text-gray-500 text-xs">Video · TPT Music For Life · 507K views</div>
          </div>
          <div class="w-10 h-10 bg-gray-700 rounded-full text-white flex items-center justify-center shrink-0">▶</div>
        </div>
      </div>
    </div>
  </div>
</body>`;
};

export default SearchResult;
