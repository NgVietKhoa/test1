window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = 'Tiểu Tiên Nữ Ớii💕'.split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    const appendTitle = () => {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 100); // Delay giữa các ký tự
      } else {
        startTextFairies(); // Bắt đầu chạy "Cho tớ xin lỗi đi mòooo 😢" sau khi hoàn tất
      }
    };

    appendTitle();
  }, 1000); // Delay ban đầu để chờ trang tải xong
};

function startTextFairies() {
  const container = document.getElementById("fairies-container");

  function createTextFairy() {
    for (let i = 0; i < 15; i++) {
      const textElement = document.createElement("div");
      textElement.className = "fairy";
      textElement.innerText = "Cho tớ xin lỗi đi mòooo 😢";

      // Đặt vị trí ngẫu nhiên trên màn hình
      const x = Math.random() * (window.innerWidth - 50); // Trừ 50 để tránh chữ bị tràn
      const y = Math.random() * (window.innerHeight - 50);

      textElement.style.left = `${x}px`;
      textElement.style.top = `${y}px`;

      container.appendChild(textElement);

      // Đổi màu chữ liên tục
      let colorInterval = setInterval(() => {
        textElement.style.color = getRandomColor();
      }, 200); // Đổi màu mỗi 200ms

      // Xóa chữ sau 2 giây
      setTimeout(() => {
        clearInterval(colorInterval); // Dừng đổi màu
        textElement.remove();
      }, 2000);
    }
  }

  // Gọi hàm mỗi 3 giây
  setInterval(createTextFairy, 3000);

  // Hàm tạo màu ngẫu nhiên
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
