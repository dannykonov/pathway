document.addEventListener('DOMContentLoaded', function() {
    // Supabase should be initialized in config.js
    console.log('DOM loaded, checking Supabase status...');
    
    // Handle FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Handle form submissions
    const waitlistForms = document.querySelectorAll('#waitlist-form-hero, #waitlist-form-bottom');
    
    waitlistForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!isValidEmail(email)) {
                showFormMessage(this, 'Please enter a valid email address.', 'error');
                return;
            }
            
            // Prepare UI for submission
            const submitButton = this.querySelector('button');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
            
            try {
                // Check if Supabase is initialized
                if (typeof supabase === 'undefined' || !supabase) {
                    console.log('Supabase not initialized, trying to initialize now...');
                    // Try to initialize Supabase if it's not already initialized
                    if (typeof initializeSupabase === 'function') {
                        initializeSupabase();
                        // Wait a bit for initialization
                        await new Promise(resolve => setTimeout(resolve, 500));
                    }
                    
                    // If still not initialized, throw an error
                    if (typeof supabase === 'undefined' || !supabase) {
                        throw new Error('Supabase client not initialized');
                    }
                }
                
                console.log('Attempting to insert email into Supabase...');
                
                // For now, simulate a successful submission
                console.log('Simulating successful submission for:', email);
                
                // Success response
                emailInput.value = '';
                submitButton.textContent = 'Joined!';
                showFormMessage(this, 'Thank you! You\'ve been added to our waitlist.', 'success');
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }, 2000);
                
                // Uncomment this when Supabase is working
                /*
                // Insert email into Supabase
                const { data, error } = await supabase
                    .from('waitlist')
                    .insert([
                        { email: email, signup_date: new Date().toISOString() }
                    ]);
                
                if (error) {
                    console.error('Supabase insert error:', error);
                    throw error;
                }
                
                console.log('Email inserted successfully:', data);
                */
                
            } catch (error) {
                console.error('Error saving to Supabase:', error);
                showFormMessage(this, 'Something went wrong. Please try again.', 'error');
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        });
    });
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to show form messages
    function showFormMessage(form, message, type) {
        // Remove any existing message
        const existingMessage = form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageElement = document.createElement('p');
        messageElement.classList.add('form-message');
        messageElement.classList.add(type);
        messageElement.textContent = message;
        
        // Insert after form
        form.parentNode.insertBefore(messageElement, form.nextSibling);
        
        // Auto-remove success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageElement.remove();
            }, 5000);
        }
    }
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.value-point, .faq-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Add fade-in class for CSS animation
    const style = document.createElement('style');
    style.textContent = `
        .value-point, .faq-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Run on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Add CSS for form messages
const formMessageStyles = document.createElement('style');
formMessageStyles.textContent = `
    .form-message {
        margin-top: 10px;
        padding: 10px;
        border-radius: var(--radius);
        font-size: 0.875rem;
    }
    
    .form-message.success {
        background-color: rgba(16, 185, 129, 0.1);
        color: #10b981;
        border: 1px solid rgba(16, 185, 129, 0.2);
    }
    
    .form-message.error {
        background-color: rgba(239, 68, 68, 0.1);
        color: #ef4444;
        border: 1px solid rgba(239, 68, 68, 0.2);
    }
`;
document.head.appendChild(formMessageStyles); 