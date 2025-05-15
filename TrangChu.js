function showContent(id) {
    // Ẩn tất cả các section
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.add('d-none'));

    // Hiện phần tử có id truyền vào
    const section = document.getElementById(id);
    if (section) {
        section.classList.remove('d-none');
    }
}
