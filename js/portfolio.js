$(document).ready(function () {
    console.log(data.portfolio[0]);

    var portfolioDivs = document.getElementById('portfolio');

    function createPortfolioDivs(myArray) {
        for (var i = 0; i < myArray.length; i++) {

            var projectDiv = document.createElement('div');
            var link = document.createElement('a');
            var mainDiv = document.createElement('div');
            var secondDiv = document.createElement('div');
            var picture = document.createElement('div');
            var projectName = document.createElement('div');
            var jobType = document.createElement('div');

            projectDiv.setAttribute('class', 'projectDiv');
            projectDiv.setAttribute('id', myArray[i]["data-index"]);
            link.setAttribute('href','projectTemplate.html');
            link.setAttribute('class','link');
            mainDiv.setAttribute('class', 'mainDiv');
            picture.setAttribute('class', 'picture');
            picture.setAttribute('id', myArray[i].id);
            secondDiv.setAttribute('class', 'secondDiv');
            projectName.setAttribute('class', 'projectName');
            jobType.setAttribute('class', 'jobType');

            projectName.innerHTML = myArray[i].projectName;
            jobType.innerHTML = myArray[i].jobType;
            secondDiv.innerHTML = '<p">&#8594;</p>';
            
            link.append(projectDiv);
            mainDiv.append(projectName, jobType)
            projectDiv.append(picture, mainDiv, secondDiv);
            portfolioDivs.append(link);
            
        }
         loadProjects();

    }
    createPortfolioDivs(data.portfolio);
    
     function loadProjects() {
            $('.projectDiv').on('click', function () {
                    localStorage.setItem("current", JSON.stringify(data.portfolio[$(this).attr('id')]));
            })
        }
       

    //  MENU CHANGE COLOR AT SOME POINT
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var portfolio = $(".portfolio").offset().top
        if (y >= portfolio) {
            $(".menuBar").css("background", "white");
        }
//        if (y >= 10) {
//            $(".mainDiv").addClass("mainDivFadeIn");
//        } 
        else {
            $(".menuBar").css("background", "black");
        }
    });

});
