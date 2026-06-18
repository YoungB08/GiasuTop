// Service Worker forGiasuTopPWA Push Notifications
self.addEventListener('push', function (event) {
  if (event.data) {
    try {
      const data = event.data.json();
      const options = {
        body: data.body || 'Bạn có thông báo bảo mật mới từ GiasuTop!',
        icon: data.icon || 'https://api.dicebear.com/7.x/identicon/png?seed=KNTech',
        badge: 'https://api.dicebear.com/7.x/identicon/png?seed=KNTech&width=96&height=96',
        vibrate: [100, 50, 100],
        data: {
          url: data.url || '/'
        }
      };

      event.waitUntil(
        self.registration.showNotification(data.title || 'KNTech Systems', options)
      );
    } catch (e) {
      // Fallback if event data is plain text instead of JSON
      const text = event.data.text();
      event.waitUntil(
        self.registration.showNotification('KNTech Systems', {
          body: text,
          icon: 'https://api.dicebear.com/7.x/identicon/png?seed=KNTech'
        })
      );
    }
  }
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});
