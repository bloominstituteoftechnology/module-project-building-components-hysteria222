function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here

    const container = document.createElement('nav')
    links.forEach(link => {
      let a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.textContent;
      a.title = link.title;
      container.appendChild(a)
    })

    return container
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
      const card = document.createElement('div');
      card.classList.add('learner-card');

      const nameP = document.createElement('p');
      nameP.textContent = learner.fullName;

      const learnerID = document.createElement('p');
      learnerID.textContent = `Learner ID: ${learner.id}`;

      const dateOfBirthP = document.createElement('p');
      dateOfBirthP.textContent = `Date of Birth: ${learner.dateOfBirth}`;

      const favLanguageP = document.createElement('p');
      const favLanguage = languages.find(lang => lang.id === learner.favLanguage);
      favLanguageP.textContent = `Favorite Language: ${favLanguage.name}`;

      [nameP, learnerID, dateOfBirthP, favLanguageP].forEach(p =>{
        card.appendChild(p);
      })

      card.addEventListener('click', () => {
        document.querySelectorAll('.learner-card').forEach(card =>{
          card.classList.remove('active');
        })
        card.classList.add('active');
      })
      return card
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    
      learners.forEach(learner => {
        const learnerCard = buildLearnerCard(learner, languages);
        document.querySelector('section').appendChild(learnerCard);
      })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer');

    const companyInfo = document.createElement('div');
    companyInfo.classList.add('company-info')
    footer.appendChild(companyInfo)

    const companyName = document.createElement('p');
    companyName.classList.add('company-name')
    companyName.textContent = footerData.companyName;
   
    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = footerData.address;
    
    const contactEmail = document.createElement('p');
    contactEmail.classList.add('contact-email');
    contactEmail.innerHTML = 'Email: <a href ="mailto:info@example.com"> info@example.com </a>';

    [companyName, address, contactEmail].forEach(p => {
      companyInfo.appendChild(p)
    })

    const socialsDiv = document.createElement('div')
    socialsDiv.classList.add('social-media');
    footer.appendChild(socialsDiv);

    for (let sites in footerData.socialMedia){
      let socialLinks = document.createElement('a')
      socialLinks.href = footerData.socialMedia[sites]
      socialLinks.textContent = sites.charAt(0).toUpperCase() + sites.slice(1);
      socialsDiv.appendChild(socialLinks)
    }

    let year = new Date().getFullYear();
    const copyrightInfo = document.createElement('div');
    copyrightInfo.textContent = `© ${footerData.companyName.toUpperCase()} ${year} `
    footer.appendChild(copyrightInfo)

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here

  document.addEventListener('click', evt => {
    if (evt.target === document.querySelector('section')){
      document.querySelectorAll('.learner-card').classList.remove('active')
    }
  })

}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
