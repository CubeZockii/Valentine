        function moveButton() {
            let button = document.getElementById("noButton");
            let x = Math.random() * (window.innerWidth - 150);
            let y = Math.random() * (window.innerHeight - 50);
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
        }

        function sayYes() {
            document.getElementById("question").style.display = "none";
            document.getElementById("buttons").style.display = "none";
            createHearts();
            document.getElementById("gifContainer").style.display = "flex";
        }

        function createHearts() {
            let heartsContainer = document.createElement("div");
            heartsContainer.classList.add("hearts");
            document.body.appendChild(heartsContainer);
            for (let i = 0; i < 20; i++) {
                let heart = document.createElement("div");
                heart.classList.add("heart");
                heart.style.left = `${Math.random() * 100}vw`;
                heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
                heartsContainer.appendChild(heart);
            }
        }