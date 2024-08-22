import { useEffect } from 'react';

export function GetNotification({ authToken }) {
  // 브라우저 알림 표시
  const showNotification = (notification) => {
    if (!notification) return;

    const browserNotification = new Notification(
      'majorLink에서 알림이 왔습니다.',
      {
        body: notification.content,
      },
    );

    setTimeout(() => {
      browserNotification.close();
    }, 10 * 1000);

    browserNotification.addEventListener('click', () => {
      // window.open(notification.url, '_blank'); // 알림 클릭 시 링크 열기
      window.open('http://localhost:3000/'); // 알림 클릭 시 링크 열기
    });
  };

  // 알림 연동
  useEffect(() => {
    const fetchNotifications = () => {
      const socket = new EventSource(
        `https://dev.majorlink.store/notification/subscribe/${authToken}`,
      );

      socket.onmessage = (event) => {
        const newNotification = JSON.parse(event.data);
        // 초기 연결 메시지를 무시하도록 필터링
        if (
          typeof newNotification === 'string' &&
          newNotification.includes('EventStream Create')
        ) {
          return;
        }
        // console.log(`event.data 데이터: ${event.data}`);
        // console.log(`소켓 데이터: ${newNotification.content}`);

        // 브라우저 알림 표시
        showNotification(newNotification);
      };

      socket.onerror = (err) => {
        console.error(
          '위 에러는 1분이 지나 알림이 꺼졌다는 내용이니 신경쓰지 않으셔도 됩니다.:',
          err,
        );
        socket.close();
      };

      socket.onclose = () => {
        console.log('알림 connection closed');
      };

      return () => {
        socket.close();
      };
    };

    fetchNotifications();
  }, [authToken]);
}
