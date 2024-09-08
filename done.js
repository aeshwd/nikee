function goHome() {
    localStorage.removeItem('cart'); // Clear cart after order
    localStorage.removeItem('address'); // Clear address details
    localStorage.removeItem('order'); // Clear order details
}
