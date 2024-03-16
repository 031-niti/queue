// สร้างตัวแปร queue เป็น array ว่าง
let queue = [];

// ฟังก์ชัน enqueue เป็นฟังก์ชันการเพิ่มคิว
document.getElementById("enqueueBtn").addEventListener("click", () => {
  // โดยจะอ่านข้อมูลชื่อลูกค้าจากช่อง customerName
  const customerName = document.getElementById("customerName").value;
  // ตรวจสอบว่ามีการกรอกชื่อหรือไม่
  // ถ้ามีชื่อลูกค้า และคิวไม่เต็ม (น้อยกว่า 5 คน)
  if (customerName) {
    if (queue.length < 5) {
      // จะเพิ่มชื่อลูกค้าลงในคิว (queue.push(customerName))
      queue.push(customerName);
      document.getElementById("customerName").value = "";
      // และเรียกใช้ฟังก์ชัน updateQueueDisplay() เพื่อปรับปรุงการแสดงผล
      updateQueueDisplay();
    } 
    // ถ้าคิวเต็ม จะแจ้งเตือน "Queue is full."
    else {
      alert("Queue is full. Cannot add more customers.");
    }
  }
});

// ฟังก์ชัน dequeue เป็นฟังก์ชันการเรียกคิว
document.getElementById("dequeueBtn").addEventListener("click", () => {
  // จะตรวจสอบว่ามีลูกค้าในคิวหรือไม่ 
  // ถ้ามีลูกค้าในคิว
  if (queue.length > 0) {
    // จะทำการเรียกคิวแรก โดย method shift และแสดงชื่อลูกค้าที่ถูกเรียก
    alert("Next customer: " + queue.shift());
    // และเรียกใช้ฟังก์ชัน updateQueueDisplay() เพื่อปรับปรุงการแสดงผล
    updateQueueDisplay();
  } else {
    alert("No more customers in the queue.");
  }
});

// ฟังก์ชัน updateQueueDisplay เป็นการปรับแต่งการแสดงผลคิว
function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  const queueHeading = document.getElementById("queueHeading");
  // แสดงจำนวนลูกค้าในคิว (ถ้ามี)
  if (queue.length > 0) {
    queueHeading.innerHTML = `<h3 class="text-p">Queue: ${queue.length}</h3>`;
    queueList.innerHTML = "";
    // วนลูป forEach เพื่อแสดงรายชื่อลูกค้าแต่ละคน พร้อมลำดับคิว
    queue.forEach((customer, index) => {
      queueList.innerHTML += `<div class="container";><p>${
        index + 1
      }. ${customer}</p></div>`;
    });
  } else {
    queueHeading.innerHTML = ""; 
  }
}

