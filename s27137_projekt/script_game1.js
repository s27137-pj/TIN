const game1Container = document.querySelector(".game_1_conteiner"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

// console.log(game1Container,userResult,cpuResult,result,optionImages);


optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "kamien.png";
        result.textContent = "Poczekaj..."



        optionImages.forEach((image2, index2) => {
            // console.log(index, index2);

            // usuniecie poprzedniego klikniecia
            index !== index2 && image2.classList.remove("active");
            });

            game1Container.classList.add("start");

            let time = setTimeout(() =>{
                game1Container.classList.remove("start");

                 // jaki kliknieto obrazek
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            // losowy numer
            let randomNumber = Math.floor(Math.random() * 3);
            // console.log(randomNumber);

            // losowy wybor dla komputera
            let cpuImages = ["kamien.png", "papier.png", "nozyce.png"];
            cpuResult.src = cpuImages[randomNumber];

            // przypisanie wartosci R P S

            let cpuValue = ["R", "P", "S"][randomNumber];

            let userValue = ["R", "P", "S"][index];

            // console.log(cpuValue, userValue);

            let outcomes = {
                RR: "Remis",
                RP: "Cpu",
                RS: "Gracz",
                PP: "Remis",
                PR: "Gracz",
                PS: "Cpu",
                SS: "Remis",
                SR: "Cpu",
                SP: "Gracz",
            };

            let outComeValue = outcomes[userValue + cpuValue];
            console.log(outComeValue);

            result.textContent = userValue === cpuValue ? "Mamy Remis" : `${outComeValue} Wygrał!`;

            // result.textContent = outComeValue;

            }, 2500);

    });
});