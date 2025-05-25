document.getElementById('languagee').addEventListener('click', function() {
            // Scroll to the section with the ID 'section2'
            document.getElementById('languagel').scrollIntoView({ behavior: 'smooth' });
        }
);
document.getElementById('profilee').addEventListener('click', function() {
            // Scroll to the section with the ID 'section2'
            document.getElementById('profilep').scrollIntoView({ behavior: 'smooth' });
        }
);
document.getElementById('skilll').addEventListener('click', function() {
            // Scroll to the section with the ID 'section2'
            document.getElementById('skillsk').scrollIntoView({ behavior: 'smooth' });
        }
);
document.getElementById('projectt').addEventListener('click', function() {
            // Scroll to the section with the ID 'section2'
            document.getElementById('projectp').scrollIntoView({ behavior: 'smooth' });
        }
);
document.getElementById("n1").innerHTML = "GAGIYA NITIN";
document.getElementById("skilll").innerHTML = "SKILLS";
document.getElementById("languagee").innerHTML = "LANGUAGE";
document.getElementById("projectt").innerHTML = "PROJECT";
document.getElementById("profilee").innerHTML = "PROFILE";
document.getElementById("pol").innerHTML = "WEB DEVELOPER";
document.getElementById("pal").innerHTML = "Hi, I Am Nitin Gagiya,<br>I Am A Frontend Developer<br>With Passion of Creating<br>Beautifull And Responsive Websites.";
document.getElementById("headd").innerHTML = "Profile";
document.getElementById("po22").innerHTML = "Welcome To My Peofile";
document.getElementById("pa22").innerHTML = "Hi, I Am Nitin Gagiya.<br>My Profession is Web Developing.<br>I Completed BCA (Bachlore Of Computer Application) From<br>Saurashtra University";


const existingElement = document.getElementById('ancc');

    const link = document.createElement('a');
    link.href = 'https://github.com/GAGIYANITIN/My-Resume';
    link.textContent = 'My Resume';
    link.target = '_blank';

    existingElement.appendChild(document.createTextNode(' '));

    existingElement.appendChild(link);



document.getElementById("po33").innerHTML = "Skills";
document.getElementById("pa33").innerHTML = "Paraof Skills";
document.getElementById("po44").innerHTML = "Languages";
document.getElementById("pa44").innerHTML = "ParaofLanguagehead";
document.getElementById("po55").innerHTML = "Projects";
document.getElementById("pa55").innerHTML = "ParaofProject";

const allelement = document.querySelectorAll('*');
allelement.forEach(allel => {
    allel.style.border = 'border-box';
    allel.style.fontFamily = 'arial';
});

document.body.style.backgroundColor = 'black';
document.body.style.color = '';

const container = document.getElementById('option');

container.style.display = 'flex';

document.getElementById("option").style.backgroundSize = "cover";
document.getElementById("option").style.backgroundPosition = "center";
document.getElementById("option").style.textAlign = "center";
document.getElementById("option").style.alignItems = "center";
document.getElementById("option").style.height = "80px";
document.getElementById("option").style.width = "100%";
document.getElementById("option").style.color = "white";
document.getElementById("option").style.display = "flex";


const nme = document.getElementById('n1');

nme.style.whiteSpace = 'nowrap'
nme.style.fontSize = 'x-large';
nme.style.marginLeft = '32px';
nme.style.marginTop = "25px";


const skl = document.getElementById('skilll');

skl.style.fontSize = 'x-large';
skl.style.marginLeft = '600px';
skl.style.background = 'no-repeat';
skl.style.border = 'none';

const lng = document.getElementById('languagee');

lng.style.fontSize = 'x-large';
lng.style.marginLeft = '70px';
lng.style.background = 'no-repeat';
lng.style.border = 'none';

const prj = document.getElementById('projectt');

prj.style.fontSize = 'x-large';
prj.style.marginLeft = '70px';
prj.style.background = 'no-repeat';
prj.style.border = 'none';

const prf = document.getElementById('profilee');

prf.style.fontSize = 'x-large';
prf.style.marginLeft = '70px';
prf.style.background = 'no-repeat';
prf.style.border = 'none';


const prp = document.getElementById('paragp');

prp.style.fontSize = '2.5rem';
prp.style.display = 'flex';
prp.style.height = '100vh';
prp.style.justifyContent = 'center';
prp.style.alignItems = 'center';
prp.style.flexDirection = 'column';
prp.style.backgroundSize = 'cover';
prp.style.backgroundImage = "url('portfolio.jpg')";
prp.style.backgroundPosition = 'center';
prp.style.animationName = 'ltr';
prp.style.animationDuration = '2s';

const prm = document.getElementById('pol');

prm.style.fontSize = '3rem';
prm.style.opacity = '0';
prm.style.fontSize = '3rem';
prm.style.color = 'yellow';
prm.style.animation = 'fadeInText 4s ease-in-out forwards';

const prl = document.getElementById('pal')
prl.style.color = 'white';
prl.style.animation = 'fadeInParagraph 4s ease-in-out forwards';

const prfp = document.getElementById('profilep')
prfp.style.color = 'mediumorchid';
prfp.style.fontSize = '2.5rem';
prfp.style.height = '120vh';
prfp.style.display = 'flex';
prfp.style.flexDirection = 'column';
prfp.style.justifyContent = 'center';
prfp.style.alignItems = 'center';
prfp.style.backgroundImage = "url('26.jpg')";
prfp.style.backgroundSize = "cover";
prfp.style.backgroundPosition = 'center';

const hed = document.getElementById('headd')
hed.style.fontSize = "4rem";
hed.style.color = "";
hed.style.opacity = "0";
hed.style.animation = 'fadeInText 4s ease-in-out forwards';

const ank = document.getElementById('ancc')
ank.style.fontSize = '3.5rem';
ank.style.opacity = '0';
ank.style.animation = 'fadeInText 4s ease-in-out forwards';

const poto = document.getElementById('po22')
poto.style.fontSize = '3.5rem';
poto.style.color = 'white';
poto.style.opacity = '0';
poto.style.animation = 'fadeInText 4s ease-in-out forwards';

const pato = document.getElementById('pa22')
pato.style.fontSize = '2.5rem';
pato.style.color = 'black';
pato.style.opacity = '0';
pato.style.animation = 'fadeInText 4s ease-in-out forwards';

const sk = document.getElementById('skillsk')
sk.style.fontSize = '2.5rem';
sk.style.color = 'mediumorchid';
sk.style.height = '120vh';
sk.style.display = 'flex';
sk.style.flexDirection = 'column';
sk.style.justifyContent = 'center';
sk.style.alignItems = 'center';
sk.style.backgroundImage = 'url("27.jpg")';
sk.style.backgroundSize = 'cover';
sk.style.backgroundPosition = 'center';

const poth = document.getElementById('po33')
poth.style.fontSize = '3rem';
poth.style.color = '';
poth.style.opacity = '0';
poth.style.animation = 'fadeInText 4s ease-in-out forwards';

const path = document.getElementById('pa33')
path.style.fontSize = '2.5rem';
path.style.color = 'black';
path.style.opacity = '0';
path.style.animation = 'fadeInText 4s ease-in-out forwards';

const lngl = document.getElementById('languagel')
lngl.style.fontSize = '2.5rem';
lngl.style.height = '110vh';
lngl.style.display = 'flex';
lngl.style.flexDirection = 'column';
lngl.style.justifyContent = 'center';
lngl.style.alignItems = 'center';
lngl.style.backgroundImage = 'url("28.jpg")';
lngl.style.backgroundSize = 'cover';
lngl.style.backgroundPosition = 'center';

const pofo = document.getElementById('po44')
pofo.style.fontSize = '3rem';
pofo.style.color = 'mediumorchid';
pofo.style.opacity = '0';
pofo.style.animation = 'fadeInText 4s ease-in-out forwards';

const pafo = document.getElementById('pa44')
pafo.style.fontSize = '2.5rem';
pafo.style.color = 'black';
pafo.style.opacity = '0';
pafo.style.animation = 'fadeInText 4s ease-in-out forwards';

const pjp = document.getElementById('projectp')
pjp.style.fontSize = '2.5rem';
pjp.style.color = 'mediumorchid';
pjp.style.height = '110vh';
pjp.style.display = 'flex';
pjp.style.flexDirection = 'column';
pjp.style.justifyContent = 'center';
pjp.style.alignItems = 'center';
pjp.style.backgroundImage = 'url("25.jpg")';
pjp.style.backgroundSize = 'cover';
pjp.style.backgroundPosition = 'center';

const pofi = document.getElementById('po55')
pofi.style.fontSize = '3rem';
pofi.style.color = 'mediumorchid';
pofi.style.opacity = '0';
pofi.style.animation = 'fadeInText 4s ease-in-out forwards';

const pafi = document.getElementById('pa55')
pafi.style.fontSize = '2.5rem';
pafi.style.color = 'black';
pafi.style.opacity = '0';
pafi.style.animation = 'fadeInText 4s ease-in-out forwards';
