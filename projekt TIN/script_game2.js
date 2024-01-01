const game2Container = document.querySelector(".game_2_conteiner"),
userResult = document.querySelector(".game_2_user_result img"),
cpuResult = document.querySelector(".game_2_cpu_result img"),
result = document.querySelector(".game_2_result"),
optionImages = document.querySelectorAll(".game_2-change");

// console.log(game2Container,userResult,cpuResult,result,optionImages);

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        game2Container.classList.add("start");

        let time = setTimeout(() => {
            game2Container.classList.remove("start");
        
            // losowy numer
            var randomNumber_1 = Math.floor(Math.random() * 6);
            // console.log(randomNumber_1);

            var randomNumber_2 = Math.floor(Math.random() * 6);
            // console.log(randomNumber_2);

            var cpuImages = ["1.png", "2.png","3.png","4.png","5.png","6.png"];
            cpuResult.src = cpuImages[randomNumber_2];


            var userImages = ["1.png", "2.png","3.png","4.png","5.png","6.png"];
            userResult.src = userImages[randomNumber_1];

                if (randomNumber_1 > randomNumber_2) {
                    document.querySelector("p").innerHTML = "🚩 Gracz nr 1 Wygrał!";
                }
                else if (randomNumber_1 < randomNumber_2) {
                    document.querySelector("p").innerHTML = "🚩 Gracz nr 2 Wygrał!";
                }
                else {
                    document.querySelector("p").innerHTML = "Mamy remis!";
                }

        },2500);
    });
});
