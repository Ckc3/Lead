
document.addEventListener('DOMContentLoaded', function() {
    // Get the audio element
    const audio = document.getElementById('backgroundMusic');
    let hasPlayed = false;
    
    // Add click anywhere to play sound
    document.addEventListener('click', function() {
        if (!hasPlayed) {
            audio.play().catch(function(error) {
                console.log('Audio play failed:', error);
            });
            hasPlayed = true;
        }
    });
    
    // Add a subtle animation to the title
    const title = document.querySelector('.site-title');
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        title.style.transition = 'opacity 1s ease, transform 1s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 300);
    
    // Add stagger animation to owner cards
    const ownerCards = document.querySelectorAll('.owner-card');
    ownerCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 600 + (index * 200));
    });
    
    // Add click effect to profile images
    const profileImages = document.querySelectorAll('.profile-image img');
    profileImages.forEach(img => {
        img.addEventListener('click', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
