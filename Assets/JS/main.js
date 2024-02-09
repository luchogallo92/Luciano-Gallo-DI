


///llamado a skills
// const skillbar = document.getElementById ("text-and-bars")

// let skillsHTML = skills.map(skill => {
//     return `
//         <div id="text-and-bars">
//             <h4>Herramientas gráficas</h4>
//             <span>${skill.id}</span>
//             <div id="progress-bar-background">
//                 <div id="progress-bar-colored">
//                     <div id="progress-span">
//                         <span>${skill.progress}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
// });

// skillsContainer.innerHTML = skillsHTML.join('');


function showContent() {
    element = document.getElementById("menu-header");
    check = document.getElementById("menu-nav");
    if (check.checked) {
        element.style.display='flex';
    }
    else {
        element.style.display='none';
    }
}

AOS.init();

// renderSkills(skills);




