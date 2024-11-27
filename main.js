// script.js

// Danh sách lớp
const danhSachLop = [
    { hoTen: "Nguyễn Văn A", gioiTinh: "Nam", noiSinh: "Hà Nội" },
    { hoTen: "Trần Thị B", gioiTinh: "Nữ", noiSinh: "Hải Phòng" },
    { hoTen: "Lê Văn C", gioiTinh: "Nam", noiSinh: "Đà Nẵng" },
    { hoTen: "Phạm Thị D", gioiTinh: "Nữ", noiSinh: "TP.HCM" },
    { hoTen: "Ngô Văn E", gioiTinh: "Nam", noiSinh: "Huế" },
    { hoTen: "Đỗ Thị F", gioiTinh: "Nữ", noiSinh: "Cần Thơ" },
    { hoTen: "Bùi Văn G", gioiTinh: "Nam", noiSinh: "Hà Giang" },
    { hoTen: "Võ Thị H", gioiTinh: "Nữ", noiSinh: "Quảng Nam" },
    { hoTen: "Hoàng Văn I", gioiTinh: "Nam", noiSinh: "Nghệ An" },
];

// Render danh sách ra HTML
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#danhSachLop tbody");

    danhSachLop.forEach((thanhVien, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${thanhVien.hoTen}</td>
            <td>${thanhVien.gioiTinh}</td>
            <td>${thanhVien.noiSinh}</td>
        `;

        tableBody.appendChild(row);
    });
});
