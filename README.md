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



**Features Left to Implement when skills develop**

  

- ...
- ...
***

  

## Technologies Used

  

**1. Languages**

 

**4. Other**


**5. IDE Extensions used in GitPod**



***

  

## Resources

  

***

  

## Testing

  

- Test carried.. 

**Testing User Stories**


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