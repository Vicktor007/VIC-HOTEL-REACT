export const resetPassword = async (resetToken, newPassword) => {
    try {
        const response = await fetch(`http://localhost:8080/auth/reset-password/${resetToken}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newPassword }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Password reset successful:', data);
    } catch (error) {
        console.error('Error resetting password:', error);
    }
};
