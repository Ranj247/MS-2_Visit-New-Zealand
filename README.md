# [Visit New Zealand](https://ranj247.github.io/MS-2_Visit-New-Zealand/)

  
The aim of this project is to provide travel guide for New Zealand and highlight the **5 biggest cities in New Zealand and what to do there**. This website has been created for my second milestone project as part of the Diploma in Full Stack Software Development course with Code Institute. The website is responsive on all device sizes.


***

## Table of contents

-  [Overview](#overview)
-  [User stories](#user-stories)
-  [UX](#ux)
-  [Features](#features)
-  [Technologies used](#technologies-used)
-  [Resources](#resources)
-  [Testing](#testing)
-  [Code validity](#code-validity)
-  [Version Control](#version-control)
-  [Deployment](#deployment)
-  [Credits](#credits)
-  [Acknowledgments](#acknowledgments)

***

## Demo
Please click on the image to open link in a new browser window.

![Image](https://res.cloudinary.com/dvsb7k8tp/image/upload/v1621107627/MS2/Am.I.Responsive_yozqls.png)


A live demo can be found - [here](https://ranj247.github.io/MS-2_Visit-New-Zealand/)

***

  

## Overview

New Zealand has become the poster child for how to deal with Covid-19. With the early lockdown and strict border measures mean it has suppressed the virus to an astonishing degree. This also means that there will be highly likely travel restrictions for international travelers, so in the mean time before the travel restrictions will be lifted, this website will allow users to search for holiday destinations in New Zealand. The user can search information about tourist attractions, travel agencies, accommodation, museums, car rentals, restaurants, cafes, and convenience stores near the searched locations.

Furthermore, after completing this project, I would be able to showcase my coding skills and knowledge of the HTML5, CSS3, Bootstrap 5, JavaScript and Intractive Frontend Development modules learnt as part of the Code Institute’s FullStack Software Development Diploma Course.
  

***

## User Stories
- I want to be able to search for holiday destinations in New Zealand.
- I want to be able to see tourist attractions and places of interest for the searched destination.
- I want to be able to search and book accomodations and restaurants for the searched destination.
- I want to be able to get in touch with the site owner for any queries. 
  

***

  

## UX


This website will offer travel guide for New Zealand and highlight the 5 biggest cities in New Zealand and what to do there. The website will provide advance user experience in finding holiday destinations in New Zealand along with popular search options made available through the search buttons. It will also advance the site owner's goals of providing useful information to the travelleres, and also exploring the tourist attractions as being an user of the website. The user will be able to contact the site's owner through the contact section and social media links.

  

***

  

**1. Strategy**

The aim of the project is that the site's owner is looking to provide travel guide for New Zealand and highlight on the 5 biggest cities in New Zealand and what to do there. By building this website, potential travellers will be able to look for information such as tourist attractions, travel agencies, accommodation, museums, car rentals, restaurants, cafes, and convenience stores near the searched locations, through the UX simple, clean and user-friendly site design.


### Site owner goals::
- Highlight what New Zealand has to offer as a travel destination, and encourage tourists to visit and explore the 5 biggest cities there.
- Provide best and useful information through the search options available underneath the search bar which will uncover various information such as tourist attractions, museums, restaurant, convenience stores etc. to suit the visitors needs and budget.
- Provide the contact form, so the users be able to get in touch with their queries in relation to their trip.


### Customer Goals:


- Availability of User friendly information on the website such as tourist attractions, museums, restaurant, convenience stores etc.
- The site to be designed with the priority of mobile devices as this it the most common way of searching for information.
- Easy to find links to social media accounts to follow the news highlights, tips etc. about the country.
- Easy to find contact form for any possible enquiries.



**2. Scope**

- Website built on the mobile-first approach to be responsive on all devices.
- A jumbotron section with catchy content to encourage the user to search for a city or town in New Zealand to show more details in relation to tourist attractions, museums, restaurant, convenience stores etc. with the markers displayed on the interactive map.

- To ensure that the website immediately shows its purpose.
- Aim to provides users with pure UX design.
- A contact form that that sends emails to an account using EmailJS.
- Highlights my current coding skills through the website creation.




**3. Structure**
- The website has three different pages, Home page, Why New Zealand?, and Contact Us so to show appropriate information on all pages which will enable users to easily grasp the website content and to navigate easily through the website. 

- Fixed navigation to enhance better user experience and to easily scroll through the different sections and all links are functional which will open the targeted page. 

- Navbar links are collapsable on smaller screen sizes to draw responsiveness and lets users to navigate between different pages without needing to use their browser navigation buttons.

- Fixed footer provide quick accessibility to social media links to the user.

- Home page will question users to why to visit New Zealand so to lead them to the search input field, type location, and choose an option by clicking a search button (place type APIs have been hard coded in the search buttons) so to uncover more information near the searched locations.

- Google Map shows location markers and provides search results list upon the users search and the results list if cleared every time a different option is selected. 

- More details button return more search result items when clicked by the user. 

- The second page shows the image slider carousal which immidiately attracts the users attention when they see beautiful landscapes in New Zealand and the section underneath the carousal highlights the 5 biggest cities in New Zealand and what to do there.

- The third page includes the Contact form with the following fields: "Full Name", "Email Address" and "Message" which will be required in order to submit the form, "Email" input must be the valid format. User is alerted of correct input if data is invalid. The user will be able to send an email with enquiry about the city via EmailJS. An alert message appears on the window when email is sent successfully or error message if unsuccesful. 



**4. Skeleton**

*wireframes mock ups:*
- Wireframes were created using [Balsamiq](https://balsamiq.com/):
  - [Wireframes](assets/docs/wireframes.pdf)
  - [Home](https://res.cloudinary.com/dvsb7k8tp/image/upload/v1621111385/MS2/Home_hred2f.png)
  - [Why New Zealand?](https://res.cloudinary.com/dvsb7k8tp/image/upload/v1621111385/MS2/Why_New_Zealand_iejbku.png)
  - [Contact Us](https://res.cloudinary.com/dvsb7k8tp/image/upload/v1621111385/MS2/Contact_Us_eop8jo.png)

  - Website built over three pages:-
  - Home, Why New Zealand?, and Contact Us 
  - Fixed navigation bar - Menu headings pointing to individual pages
  - Fixed Footer with Copyright info and Social Media icons

- Flowchart created using [draw.io](https://app.diagrams.net/):
  - [Flowchart](https://res.cloudinary.com/dvsb7k8tp/image/upload/v1621110788/MS2/Flow_chart_image_d0i8ff.png)
  


**5. Surface**

I have decided on an attractive landing page showcasing hero image with catchy wordings wrapped in a jumbotron, and encouraging users to find out more by typing a location and search through the options to enhance user experience.


- Header & Footer sections - #516c94 (Queen Blue), this color applies to the header & footer section, and maintains contrast to the landing page, hero image.

- Buttons - #72A276 (Forest Green Crayola) - This color applies to the buttons background.

- Buttons - #3c5d40 (Hunter Green) - This color applies to the buttons background on a hover effect.

- Body color: (#e1e6eb) - This color applies to the body background color.

- text color: (#fffff) - This color applies to menu headings, section titles and body text maintaining strong, balanced contrasts.

### Typography
- "Lato" font (with fall-back font of Sans-Serif) for body headings and text. 

### Images

The image selection has been carefully chosen to showcase beautiful monuments and landscapes of New Zealand.

***
  
## Features

**Existing Features**
- Designed with HTML5, CSS3, JavaScript and Bootstrap5.

- Website has three different pages, Home, Why New Zealand?, Contact US.

- It is a fully responsive website hat allows the user to use it on any device.

***

## Technologies Used

**1. Languages**

- [HTML5](https://en.wikipedia.org/wiki/HTML5) - the current standard that is used.
- [CSS3](https://en.wikipedia.org/wiki/CSS) - the current standard that is used.
- [CSS3](https://en.wikipedia.org/wiki/JavaScript) - the current standard that is used.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript).


**2. Integrations**

- [Bootstrap](https://getbootstrap.com/) - by linking via Bootstrap CDN to HTML Doc making the design responsive. 
- [Font Awesome](https://fontawesome.com/) - Icons for Social Media links in Footer and Tours section
- [Google Fonts](https://fonts.google.com/) - to import typography of the website into the stylesheet file.
- [Google Developers Console](https://console.cloud.google.com/apis/dashboard?project=erudite-cycle-307422&folder=&organizationId=) to get the APIs used on the site.
- [EmailJS](https://www.emailjs.com/) - Java script code given to make Contact Form functional 

**3. API**

This site uses following APIs:

1.  [Google Maps JavaScript API](https://developers.google.com/maps/documentation/places/web-service/overview) used to create the map
    - On the loading of the website, google map show Auckland as being the center location, and the map is restricted to New Zealand which means the user cannot leave New Zealand bounds. 
    - The textual information is provided to the user through the landing page to direct the user to the google maps and search for beautiful places in New Zealand.  
    - Next to the map, there is a search bar to type location and adjusant to the search bar, there are various buttons which provides the user with different search options such as tourist attractions, travel agencies, accommodation, museums, car rentals, restaurants, cafes, and convenience stores. When buttons are clicked, map is filled with the markers and a results list is generated. Furthermore, when the next button is clicked, a new list is shown along with the new markers on the map.
    - The results list shows name of the business and a clickable google New Zealand search link which opens in a new tab where the user can go ahead and get further information. 
    
2.  [EmailJS](https://dashboard.emailjs.com/sign-in) used to allow the user to send a message via the contact form.




**4. Workspace, version control and Repository storage**

- [GitPod](https://github.com/mkuti/corklagos-venture/blob/master/gitpod.io)- Main workspace IDE (Integrated Development Environment)
- [Git](https://git-scm.com/) - Distributed Version Control tool to store versions of files and track changes.
- [GitHub](https://github.com/) - A cloud-based hosting service to manage my Git repositories.

**5. Other**
- [Autoprefixer](https://autoprefixer.github.io/) Parses CSS and adds vendor prefixes.
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) Mobile-friendly check on site.
- [Website Page Test](https://www.webpagetest.org/) Runs a website speed test from multiple locations around the globe using real browsers (IE and Chrome) and at real consumer connection speeds. 
- [Online-Spellcheck](https://www.online-spellcheck.com/) Online spelling and grammar checks.
- [Resizeimage](https://resizeimage.net/) - for photo editing 
- [compresspng](https://compresspng.com/) - for photo editing


**6. IDE Extensions used in GitPod**
- Auto Close Tag
- Bootstrap 4 CDN Snippet
- Prettier - Code Formatter
- Bracket Pair Colorizer
- Code spell Checker
- FontAwesome Auto-complete

***

## Resources

- [Code Institute Course Content](https://courses.codeinstitute.net/login) -Main source of fundamental knowledge.
- [youtube](https://www.youtube.com/) - General resource.
- [Stack Overflow](https://stackoverflow.com/) -General resource.
- [Google chrome developer tools](https://developer.chrome.com/docs/devtools/) - used to check page elements, help debug issues with the site layout and test different CSS styles and console JS.
- [w3schools](https://www.w3schools.com/default.asp)-General resource.
- [Balsamic](https://balsamiq.com/wireframes/) - Wireframing design tool to create wireframes.
- [Am I Responsive](http://ami.responsivedesign.is/) - Responsive website mockup image generator.
- [Colors](https://coolors.co/) - color schemes generator.
- [Contrast checker](https://webaim.org/resources/contrastchecker/) -contrast color checker


***

## Testing


- After passing the JavaScript code from the maps.js through the JavaScript code validator [JSHint](https://jshint.com/), one of the warnings appears is:
1. Two unused variables appeared
    18	initialize
    100	codeAddressSearch
Both the variables are Maps JavaScript APIs functions.

2. One undefined variable
20	google
29	google
115	google
136	google
202	google
203	google
204	google
205	google
208	google

Again the values are coming from the Maps JavaScript APIs functions.


- Test carried on the **Navbar link** which appears on the left of the menu bar to ensure it points to the Home page.
- Test carried on the **Home, Why New Zealand? and Contact Us** pages in menu bar to ensure it points to correct page.
- Test carried on the **Social Media icons** in the Footer to ensure the specific link opens the correct pages, and in the new tab. 
- Test carried on the **Send** button on Contact page without filling any information to ensure that the error displays under the text box displaying 'Please fill out this field'.
- Test carried on the **Email** input box by entering an invalid email address to ensure that an error displays under the text box displaying 'Please include an @ in the email address'.
- Test carried on the **Emailjs** functionality by filling the contact form and clicking submit to ensure that the message is sent by receiving the alert message for successful submission of the message.

- Ran CSS through [Autoprefixer](https://autoprefixer.github.io/) and copied the resulted CSS codes back into style.css file.

- Tested [HTML Validation](https://validator.w3.org/) No errors or warnings to show.
- Tested [CSS Validation](https://jigsaw.w3.org/css-validator/) No errors found. 
- Checked grammar and spelling throughout document.
- Test carried on the Responsiveness of all pages using [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly).
- 1. [Result](https://res.cloudinary.com/dvsb7k8tp/image/upload/v1621127722/MS2/mobile_friendly_page_ofhfer.png)

- Test carried on the overall site colours on [a11y](https://color.a11y.com/), a Color Contrast Accessibility Validator. 
- 1. Test result came back with excellent results.
- Ran README text through [Online-Spellcheck](https://www.online-spellcheck.com/) to double-check on grammar and spelling.

**Testing User Stories**

- I want to be able to search for holiday destinations in New Zealand.
- 1. As the website is built with three pages, the home page directs a new user and a returning user to search for beautiful places in New Zealand by typing a location in the search bar and using the search buttons to find information required. The user will be provided with the search results list which would show the busines name and a clickable link, upon clicking the link, the user can find further information to complete their bookings through the google pages.

- I want to be able to see tourist attractions and places of interest for the searched destination.
- 1. The users can choose different search options by selecting different buttons as the buttons are named as per the search types. The user can search information about tourist attractions, travel agencies, accommodation, museums, car rentals, restaurants, cafes, and convenience stores near the searched locations.
- I want to be able to search and book accomodations and restaurants for the searched destination.
- 1. After a completed search, the users are presented with a search results list which contains name of the business and a clickable link which directs the user to a google link of New Zealand with the business details where the user can complete their bookings. 
- I want to be able to get in touch with the site owner for any queries. 
- 1. The users submits the contact form in a contact us section, and fill in their details and the message query and click submit. After submitting the form, the users are presented with an alert message stating if their message has been sent successfully and if not, then they need to try again to send the message. 


**Project barriers and solutions**

- ..

  

**Code validity**


  

**Version Control**

- Used Git for version control.

  

**Deployment**

  


***

  
  
  

## Credits

  

**Media**


**Content**



**Code Snippets**



***

  

## Acknowledgements


  




***