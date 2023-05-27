        // lấy các phần tử HTML
        const decrementBtn = document.querySelector('.decrement');
        const incrementBtn = document.querySelector('.increment');
        const quantityInput = document.querySelector('.quantity');

        // thêm sự kiện click vào nút giảm số lượng
        decrementBtn.addEventListener('click', () => {
            // giảm giá trị của ô số lượng nếu giá trị hiện tại lớn hơn 0
            if (parseInt(quantityInput.value) > 0) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });

        // thêm sự kiện click vào nút tăng số lượng
        incrementBtn.addEventListener('click', () => {
            // tăng giá trị của ô số lượng nếu giá trị hiện tại nhỏ hơn giá trị tối đa
            if (parseInt(quantityInput.value) < parseInt(quantityInput.getAttribute('max'))) {
                quantityInput.value = parseInt(quantityInput.value) + 1;
            }
        });
        function deleteRow(btn) {
            var row = btn.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }