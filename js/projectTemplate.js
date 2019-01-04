$(document).ready(function () {

    var currentProject = JSON.parse(localStorage.getItem("current"));

//    console.log(currentProject);
    var projectTemplate = $('#projectTemplate');

    function createProjectsTemplate(myArray) {
        var titleDiv = document.createElement('div');
        var projectName = document.createElement('div');
        var projectType = document.createElement('div');
        var projectInfo = document.createElement('div');
        var projectDescription = document.createElement('div');
        //        var projectDescriptionTitle = document.createElement('div');
        var projectDescriptionInfo = document.createElement('div');
        var projectDescriptionframeworks = document.createElement('div');
        var projectDescriptionMore = document.createElement('div');
        var projectImages = document.createElement('div');
        var github = document.createElement('div');
        var explore = document.createElement('div');
        var mainImage = document.createElement('img');
        var secondImage = document.createElement('img');
        var thirdImage = document.createElement('img');
        var division = document.createElement('div');
        var getBack = document.createElement('div');

        titleDiv.setAttribute('class', 'titleDiv');
        projectName.setAttribute('class', 'projectName');
        projectName.className += ' animated fadeInLeft';
        projectType.setAttribute('class', 'projectType');
        projectType.className += ' animated fadeInRight';
        projectInfo.setAttribute('class', 'projectIsnfo');
        projectImages.setAttribute('class', 'projectImages');
        projectDescription.setAttribute('class', 'projectDescription');
        //        projectDescriptionTitle.setAttribute('class', 'projectDescriptionTitle');
        projectDescriptionInfo.setAttribute('class', 'projectDescriptionInfo');
        projectDescriptionInfo.className += ' animated zoomIn';
        projectDescriptionMore.setAttribute('class', 'projectDescriptionMore');
        projectDescriptionMore.className += ' animated zoomIn';
        projectDescriptionframeworks.setAttribute('class', 'projectDescriptionframeworks');
        projectDescriptionframeworks.className += ' animated zoomIn';
        github.setAttribute('class', 'github');
        explore.setAttribute('class', 'explore');
        getBack.setAttribute('class', 'getBack');
        division.setAttribute('class', 'division');
        division.className += ' animated zoomIn';
        secondImage.setAttribute('class', 'secondImage');
        thirdImage.setAttribute('class', 'thirdImage');
        mainImage.setAttribute('src', currentProject.picture);
        mainImage.setAttribute('data-src', currentProject.picture);
        mainImage.setAttribute('class', currentProject.class1);
        mainImage.className += ' lazyload firstImage';
        secondImage.setAttribute('src', currentProject.picture2);
        secondImage.setAttribute('data-src', currentProject.picture2);
        secondImage.setAttribute('class', currentProject.class2);
        secondImage.className += ' lazyload secondImage';
        thirdImage.setAttribute('src', currentProject.picture3);
        thirdImage.setAttribute('data-src', currentProject.picture3);
        thirdImage.setAttribute('class', currentProject.class3);
        thirdImage.className += ' lazyload thirdImage';

        function getframeworks(project) {
            for (var i in project.frameworksUsed) {
                var framework = project.frameworksUsed[i];
                for (var j in framework) {
                    var iconDiv = document.createElement('div');
                    iconDiv.innerHTML = '<i>' + '</i>';
                    iconDiv.classList.add(framework[j], 'iconDiv');
                    projectDescriptionframeworks.append(iconDiv);
                    //                console.log(framework[j])
                }
            }
        }
        getframeworks(currentProject);

        projectName.innerHTML = currentProject.projectName;
        projectType.innerHTML = currentProject.jobType;
        //        projectDescriptionTitle.innerHTML = 'Description';
        projectDescriptionInfo.innerHTML = currentProject.description;
        github.innerHTML = "<a href='#'>github</a>";
        explore.innerHTML = "<a href='#'>explore</a>";
        getBack.innerHTML = "<a href='portfolio.html'>Back to Portfolio</a>";


        //        console.log(myArray[2].picture);
        projectImages.append(mainImage, secondImage, thirdImage, getBack);
        titleDiv.append(projectName, projectType);
        projectDescriptionMore.append(github, explore);
        projectDescription.append(projectDescriptionInfo, projectDescriptionframeworks, projectDescriptionMore, division);
        projectInfo.append(projectDescription, projectImages);
        projectTemplate.append(titleDiv, projectInfo);
    }

    createProjectsTemplate(data.portfolio);
});
