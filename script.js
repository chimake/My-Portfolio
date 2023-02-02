const ham = document.querySelector('.menu-hamburger-trigger');
const closeMenu = document.querySelector('.close');
const sections = document.querySelectorAll('section');
const menuContainer = document.querySelector('.menu-container');
const mobileLinKItem = document.querySelectorAll('.mobile-link-item');

function sectionFunc() {
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].classList.remove('blur');
  }
  menuContainer.style.display = 'block';
}

function sectionHide() {
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].classList.remove('blur');
  }
  menuContainer.style.display = 'none';
}

ham.addEventListener('click', sectionFunc);
closeMenu.addEventListener('click', sectionHide);

for (let i = 0; i < mobileLinKItem.length; i += 1) {
  mobileLinKItem[i].addEventListener('click', sectionHide);
}

const project = [{
  name: "Tonic",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  imagesource: "assets/images/SnapshootPortfolio.png",
  altmessage: "project1",
  technologies: ['html', 'css', 'javascript'],
  projectsummary: ['CANOPY', 'Back end dev', '2015'],
  livelink: ['#', 'See live', 'assets/images/seelive.png'],
  sourcelink: ['#', 'See Source', 'assets/images/seesource.png'],
  buttontext: "See Project",
  uniqueid: "0",
  cancel: "assets/images/portfoliocancel.png"

},
{
  name: "Multi-Post Stories",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  imagesource: "assets/images/SnapshootPortfolio2.png",
  altmessage: "project2",
  technologies: ['html', 'css', 'javascript'],
  projectsummary: ['CANOPY', 'Back end dev', '2015'],
  livelink: ['#', 'See live', 'img/seelive.png'],
  sourcelink: ['#', 'See Source', 'img/seesource.png'],
  buttontext: "See Project",
  uniqueid: "1",
  cancel: "assets/images/portfoliocancel.png"
},
{
  name: "Tonic",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  imagesource: "assets/images/GymfitSnapshootPortfolio.png",
  altmessage: "project3",
  technologies: ['html', 'css', 'javascript'],
  projectsummary: ['CANOPY', 'Back end dev', '2015'],
  livelink: ['#', 'See live', 'assets/images/seelive.png'],
  sourcelink: ['#', 'See Source', 'assets/images/seesource.png'],
  buttontext: "See Project",
  uniqueid: "2",
  cancel: "assets/images/portfoliocancel.png"


},
{
  name: "Multi-Post Stories",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  imagesource: "assets/images/ProfessionalSnapshootPortfolio.png",
  altmessage: "project4",
  technologies: ['html', 'css', 'javascript'],
  projectsummary: ['CANOPY', 'Back end dev', '2015'],
  livelink: ['#', 'See live', 'assets/images/seelive.png'],
  sourcelink: ['#', 'See Source', 'assets/images/seesource.png'],
  buttontext: "See Project",
  uniqueid: "3",
  cancel: "assets/images/portfoliocancel.png"


}
]
const header = document.querySelector('#works');
const about = document.querySelector('#about-me-more');
const contact = document.querySelector('#contact-me');
const portfolio = document.querySelector('#portfolio');
const portfoliopopup = document.querySelector('.portfolio-popup');

function generateHtml(tag, tagClassName) {
  tag = document.createElement(tag);
  tag.className = tagClassName;
  
  return tag;
}

function addTextAppend(tag, text, parent) {
  tag.textContent = text;
  parent.appendChild(tag);
  return tag;
}

function fetchPortfolio() {
  for (let i = 0; i < project.length; i += 1) {
    //let div = generateHtml('div', 'con con1 con-1');
    let article = generateHtml('article', 'media');
    let mediaDivClasses = ["media-img img-1","media-img img-2","media-img img-3","media-img img-4"];
    let mediaImg = generateHtml('div',mediaDivClasses[i]);
    let mediaImgTag = new Image();
    // Add image
    mediaImgTag.src = project[i].imagesource;
    mediaImgTag.alt = project[i].altmessage;
    let divMediaBody = generateHtml('div','media-body');
    let portfolioHeader = generateHtml('h4');
    let divRoleSummary = generateHtml('div','role');
    let span1 = generateHtml('span');
    let spanDot1 = generateHtml('i');
    let span2 = generateHtml('span');
    let spanDot2 = generateHtml('i');
    let span3 = generateHtml('span');
    let divDescription = generateHtml('div','description');
    let paragraphDescription = generateHtml('p');
    let ulSkills = generateHtml('ul','skills');
    let liSkills1 = generateHtml('li');
    let liSkills2 = generateHtml('li');
    let liSkills3 = generateHtml('li');
    let divReadmore = generateHtml('div','read-more');
    let readMeMoreAnchor = document.createElement('a');
    readMeMoreAnchor.href = "#";

    portfolio.appendChild(article);
    article.appendChild(mediaImg);
    mediaImg.appendChild(mediaImgTag);
    article.appendChild(divMediaBody);
    addTextAppend(portfolioHeader, project[i].name, divMediaBody);
    divMediaBody.appendChild(divRoleSummary);
    addTextAppend(span1, project[i].projectsummary[0],divRoleSummary);
    divRoleSummary.appendChild(spanDot1);
    addTextAppend(span2, project[i].projectsummary[1], divRoleSummary);
    divRoleSummary.appendChild(spanDot2);
    addTextAppend(span3, project[i].projectsummary[2], divRoleSummary);
    divMediaBody.appendChild(divDescription);
    addTextAppend(paragraphDescription, project[i].description, divDescription);
    divMediaBody.appendChild(ulSkills);
    addTextAppend(liSkills1, project[i].technologies[0], ulSkills);
    addTextAppend(liSkills2, project[i].technologies[1], ulSkills);
    addTextAppend(liSkills3, project[i].technologies[2], ulSkills);
    divMediaBody.appendChild(divReadmore);
    addTextAppend(readMeMoreAnchor, project[i].buttontext, divReadmore);





  } //end of for loop

  let buttons = document.querySelectorAll('.read-more a');
  let toolbar = document.querySelector('.toolbar');

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', function () {
      header.classList.add('blur');
      toolbar.style.display = 'none';
      about.style.display = 'none';
      contact.style.display = 'none';
      portfolio.style.display = 'none';
      portfoliopopup.style.display = 'flex';
      window.scrollTo(0, 0);

      let popupdiv = generateHtml('div', 'popup-div');

      let divtitle = document.createElement('div');
      divtitle.className = "div-title";
      let divtop = generateHtml('div', 'div-top');

      let divbottom = generateHtml('div', 'div-bottom');
      let divbutton = generateHtml('div', 'div-button');
      let popupimage = new Image();
      let divtitlename = document.createElement('h2');
      let divtitlecanopy = generateHtml('p', 'canopy');
      let divtitlebackend = generateHtml('p', 'backend');
      let divtitleyear = generateHtml('p', 'y15');
      let divtitlecounter1 = generateHtml('i','dot');
      let divtitlecounter2 = generateHtml('i','dot');
      let divtitlecancel = new Image();
      let frametitle = generateHtml('div', 'frame-title');
      let framecanopy = generateHtml('div', 'frame-canopy');
      let frameLanguage = generateHtml('div', 'frame-language');

      addTextAppend(divtitlename, project[i].name, frametitle);
      divtitle.appendChild(frametitle);

      divtitlecancel.src = project[i].cancel;
      divtitlecancel.className = "portfolio1cancel";
      frametitle.appendChild(divtitlecancel);
      divtitle.appendChild(frametitle);


      addTextAppend(divtitlecanopy, project[i].projectsummary[0], framecanopy)


      divtitle.appendChild(framecanopy);

     
      framecanopy.appendChild(divtitlecounter1);
      divtitle.appendChild(framecanopy);


      addTextAppend(divtitlebackend, project[i].projectsummary[1], framecanopy);
      divtitle.appendChild(framecanopy);

      
      framecanopy.appendChild(divtitlecounter2);
      divtitle.appendChild(framecanopy);

      addTextAppend(divtitleyear, project[i].projectsummary[2], framecanopy);
      divtitleyear.className = "y15";
      divtitle.appendChild(framecanopy);


      portfoliopopup.appendChild(popupdiv);
      popupdiv.appendChild(divtitle);
      popupdiv.appendChild(divtop);
      popupdiv.appendChild(divbottom);
      divtop.appendChild(popupimage);
      popupimage.src = project[i].imagesource;
      popupimage.alt = project[i].altmessage;
      popupimage.className = "popup-image";

      let divbottomdescription = generateHtml('p', 'popup-description');
      addTextAppend(divbottomdescription, project[i].longdescription, divbottom)


      let divbottomlanguage = generateHtml('ul', 'bottom-list');
      for (let x = 0; x < project[i].technologies.length; x += 1) {
        let divbottomlanguageListitem = document.createElement('li');
        let cs = "modal-list";
        if (project[i].technologies[x] === "html") {
          divbottomlanguageListitem.textContent = project[i].technologies[x];
          divbottomlanguageListitem.className = cs;

        } else if (project[i].technologies[x] === "css") {
          divbottomlanguageListitem.textContent = project[i].technologies[x];
          divbottomlanguageListitem.className = cs;

        } else if (project[i].technologies[x] === "javascript") {
          divbottomlanguageListitem.textContent = project[i].technologies[x];
          divbottomlanguageListitem.className = cs;

        }

        divbottomlanguage.appendChild(divbottomlanguageListitem);
      }

      frameLanguage.appendChild(divbottomlanguage);
      divbottom.appendChild(frameLanguage);

      let divbottombutton1 = generateHtml('a', 'projectbutton');
      divbottombutton1.type = "button";
      divbottombutton1.href = project[i].livelink[0];
      let image1 = new Image();
      image1.src = project[i].livelink[2];
      addTextAppend(divbottombutton1, project[i].livelink[1], divbutton);
      divbottombutton1.appendChild(image1);
      frameLanguage.appendChild(divbutton);
      divbottom.appendChild(frameLanguage);

      let divbottombutton2 = generateHtml('a', 'projectbutton');
      divbottombutton2.type = "button";
      divbottombutton2.href = project[i].sourcelink[0];
      let image2 = new Image();
      image2.src = project[i].sourcelink[2];
      addTextAppend(divbottombutton2, project[i].sourcelink[1], divbutton);
      divbottombutton2.appendChild(image2);
      frameLanguage.appendChild(divbutton);
      divbottom.appendChild(frameLanguage);

      let c = document.querySelector('.portfolio1cancel');
      c.addEventListener('click', () => {
        header.classList.remove('blur');
        toolbar.style.display = 'block';
        about.style.display = 'block';
        contact.style.display = 'block';
        portfoliopopup.style.display = 'none';
        portfolio.style.display = 'grid';
        popupdiv.remove();
      });

    });

  }
}