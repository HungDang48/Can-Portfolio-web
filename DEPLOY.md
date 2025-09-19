# Hướng dẫn Deploy lên Vercel

## 🚀 Deploy tự động với Vercel

### Bước 1: Chuẩn bị
1. Đảm bảo code đã được push lên GitHub repository
2. Tất cả dependencies đã được cài đặt và test local

### Bước 2: Deploy trên Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub account
3. Click "New Project"
4. Import repository từ GitHub
5. Vercel sẽ tự động detect đây là React project
6. Click "Deploy"

### Bước 3: Cấu hình (nếu cần)
- **Build Command**: `npm run build` (mặc định)
- **Output Directory**: `build` (mặc định)
- **Install Command**: `npm install` (mặc định)

## 📁 Files quan trọng cho Vercel

### vercel.json
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### package.json
- Build script: `"build": "react-scripts build"`
- Dependencies đã được cài đặt đầy đủ

## 🔧 Kiểm tra sau khi deploy

### 1. Kiểm tra ảnh avatar
- URL: `https://your-domain.vercel.app/img/CANAva2.png`
- Đảm bảo ảnh hiển thị đúng

### 2. Kiểm tra video
- URL: `https://your-domain.vercel.app/video/[video-name].mp4`
- Đảm bảo video load được

### 3. Kiểm tra routing
- Test các route: `/`, `/about`, `/gallery`, `/contact`
- Đảm bảo không bị 404 khi refresh trang

### 4. Kiểm tra responsive
- Test trên mobile, tablet, desktop
- Đảm bảo giao diện hiển thị đúng

## 🐛 Troubleshooting

### Lỗi ảnh không hiển thị
- Kiểm tra đường dẫn file trong `public/` folder
- Đảm bảo tên file chính xác (case-sensitive)

### Lỗi video không load
- Kiểm tra file video có trong `public/video/`
- Đảm bảo format video được hỗ trợ (mp4)

### Lỗi routing
- Kiểm tra file `vercel.json` có đúng cấu hình
- Đảm bảo React Router được cấu hình đúng

## 📊 Performance Tips

1. **Optimize images**: Sử dụng WebP format nếu có thể
2. **Compress videos**: Giảm kích thước file video
3. **Enable caching**: Vercel tự động cache static files
4. **Use CDN**: Vercel sử dụng global CDN

## 🔄 Auto Deploy

Sau khi setup xong, mỗi lần push code lên GitHub:
1. Vercel sẽ tự động build và deploy
2. Preview URL sẽ được tạo cho mỗi commit
3. Production URL sẽ được update khi merge vào main branch

## 📞 Support

Nếu gặp vấn đề:
1. Kiểm tra Vercel dashboard logs
2. Test local với `npm run build && npx serve -s build`
3. Kiểm tra browser console để xem lỗi
