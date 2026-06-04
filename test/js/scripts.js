document.addEventListener("DOMContentLoaded", () => {
    const panes = document.querySelectorAll(".step-pane");
    const progressBar = document.getElementById("modalProgressBar");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const overseasSelect = document.getElementById("overseasSelect");
    const overseasNotice = document.getElementById("overseasNotice");

    let activeIndex = 0;
    let totalSteps = panes.length;

    const updateUI = () => {
        panes.forEach((pane, idx) => {
            pane.classList.toggle("d-none", idx !== activeIndex);
        });

        // Set dynamic width on progress tracker element
        progressBar.style.width = `${((activeIndex + 1) / totalSteps) * 100}%`;

        // Handle conditional operational navigation display states
        prevBtn.classList.toggle("d-none", activeIndex === 0);
        
        if (activeIndex === totalSteps - 1) {
            nextBtn.classList.add("d-none");
        } else {
            nextBtn.classList.remove("d-none");
            nextBtn.innerText = "Next";
        }
    };

    // Evaluates form integrity validation parameters before processing transitions
    const validatePane = () => {
        const currentPane = document.querySelector(`.step-pane[data-pane-index="${activeIndex}"]`);
        const inputs = currentPane.querySelectorAll("input[required], select[required]");
        let isValid = true;

        inputs.forEach(input => {
            input.classList.remove("is-invalid-custom");
            if (input.type === "checkbox" && !input.checked) {
                input.classList.add("is-invalid-custom");
                isValid = false;
            } else if (!input.value.trim()) {
                input.classList.add("is-invalid-custom");
                isValid = false;
            }
        });

        // Rule validation filter for user profile role parameters (Step 2)
        if (activeIndex === 2) {
            const checkboxes = currentPane.querySelectorAll(".role-cb");
            const isOneChecked = Array.from(checkboxes).some(cb => cb.checked);
            if (!isOneChecked) {
                checkboxes.forEach(cb => cb.classList.add("is-invalid-custom"));
                alert("Please declare at least one dynamic corporate assignment role profile to finish layout execution.");
                return false;
            }
        }

        if (!isValid) {
            alert("Please fill all required inputs marked with an asterisk (*) to progress layout structure data.");
        }
        return isValid;
    };

    nextBtn.addEventListener("click", () => {
        if (!validatePane()) return;

        // Handle branching paths matching variable selections inside step 3
        if (activeIndex === 3) {
            if (overseasSelect.value === "no") {
                activeIndex = 5; // Route sequence directly past optional module index
                updateUI();
                return;
            }
        }

        if (activeIndex < totalSteps - 1) {
            activeIndex++;
            updateUI();
        }
    });

    prevBtn.addEventListener("click", () => {
        // Reverse routing fallback layer handling branch profiles
        if (activeIndex === 5 && overseasSelect.value === "no") {
            activeIndex = 3;
            updateUI();
            return;
        }

        if (activeIndex > 0) {
            activeIndex--;
            updateUI();
        }
    });

    // Handles local matrix calculation metrics dynamically
    overseasSelect.addEventListener("change", (e) => {
        const isOverseas = e.target.value === "yes";
        overseasNotice.classList.toggle("d-none", !isOverseas);
        
        document.getElementById("actualAmount").innerText = isOverseas ? "94.99" : "49.99";
        document.getElementById("baseAmount").innerText = isOverseas ? "45.00" : "35.00";
        document.getElementById("netAmount").innerText = isOverseas ? "45.00" : "35.00";
        document.getElementById("vatAmount").innerText = isOverseas ? "9.00" : "7.00";
        document.getElementById("totalAmount").innerText = isOverseas ? "54.00" : "42.00";
    });

    // Action payment processors click listeners placeholders hooks
    document.getElementById("stripeBtn").addEventListener("click", () => alert("Stripe payment handler sequence triggered mapping local fee fields."));
    document.getElementById("paypalBtn").addEventListener("click", () => alert("PayPal engine payload generation handling currency tokens."));
});
