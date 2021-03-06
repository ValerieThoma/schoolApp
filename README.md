![logo](images/eduCrateblocks.png)

__eduCrate__, a learning management system, offers a streamlined infrastructure advantageous for the blended learning environments of grade-school aged students. The software provides educators an authoring tool in which to deliver assignments, document the progress of students, record correspondence with parents, and otherwise manage and administer all other miscellaneous instructional content directly to the parents and students.


## Features:
**Registration and Log In**
* Software accepts log in from three distinct registered users: *teachers*, *parents*, and *students*
* Teachers and Parents log in using their email, a hashed password, and a generated token 
* Students log in using a username, hashed password, and a generated token

****

**Features for Teachers**
* *This application was designed for ease of use among teachers and parents, particularly teachers*

  *Teachers have administrative control over the information that is uploaded and disseminated*

  *The teacher's Dashboard and Navigation Bar will have more features than both parents and students*
* Dashboard Nav routes users to __Courses__, __Students__, __Inbox__, __Calendar__, and __Log out__
* __Courses__ view displays a list of that user's courses and course descriptions
* Clickable __Course__ Name generates a __Course__ Navigation Bar
* __Course__ Navigation Bar routes users to __Syllabus__, __Assignments__, __Grades__, and __Students
* __Syllabus__ view displays the syllabus for the course previously selected
* __Assignments__ view displays name and description of current assignments for the selected course
* For the teacher, he/she has button to 'add assignments'
* __Add Assignment__ view allows the teacher to name and describe the new assignment - it is then added to the __Assignment__ view
* __Students__ view displays the names of the teacher's students along with email, phone, and a link to guardian info
* Guardian info link displays guardian's information (name, email, telephone)  
* When the name of the guardian is clicked, a compose message box is generated 
* __Grades__ view displays student name, assignment name, assignment status, and grade
* Because the teacher will have a  multitude of grades data, the __Grades__ table is searchable
* The teacher also has an 'edit' option to update a student's assignment status or grade
* The __Inbox__ displays unread messages, both numerically near the Dashboard Navbar icon and in bold text in the message view. User can compose and send messages, view all previous sent messaes.
* The __Calendar__ displays and paginates through months, weeks, work weeks (M-F), days, and agenda tables
* The teacher's calendar features, exclusively, an 'add event' button
* The __Add Event__ display allows teachers to name the event, chose a start and end time from a date picker, enter notes about or a description of the event, and assign the event to a specific course
* __Log Out__ destroys the users token

****

**Features for everyone**
* Dashboard Nav routes users to __Courses__, __Inbox__, __Calendar__, and __Log out__
* __Courses__ view displays a list of that user's courses and course descriptions
* Clickable __Course__ Name generates a __Course__ Navigation Bar
* __Course__ Navigation Bar routes users to __Syllabus__, __Assignments__, __Grades__
* __Syllabus__ view displays the syllabus for the course previously selected
* __Assignments__ view displays name and description of current assignments for the selected course
* __Grades__ view displays student name, assignment name, assignment status, and grade
* To best serve the many instances of parents with multiple students, the __Grades__ table is searchable
* The __Inbox__ displays unread messages, both numerically near the Dashboard Navbar icon and in bold text in the message view. User can compose and send messages, view all previous sent messaes.
* The __Calendar__ displays and paginates through months, weeks, work weeks (M-F), days, and agenda tables
* __Log Out__ destroys the users token     



<!-- ## Challenges and Solutions: -->

## Architecture: 
* Frontend: React, Redux, JSX, Sass, React-Materialize, Material-UI
* Backend API: Node.js, Express, MySQL
* Server: AWS EC2

## Live Demo:
[Watch on Youtube](https://youtu.be/38bW-8KEB_A)


![demo](https://media.giphy.com/media/xULW8Kkp3P2eXJMBsQ/giphy.gif)

## Screenshots:
Log in page:
![Log in page](images/loginPage.png)
Assignment view from Dashboard: 
![Assignment View](images/courseView.png)
Calendar: 
![Calendar](images/calendar.png)
Compose Message:
![Inbox](images/inbox.png)


## Tests



## Team Members & Roles:
* [Eddie Atkinson](https://github.com/eddieatkinson)
**Charming Genius|console.logger|Tolerates Giraffes|can now officially say he's a React Developer**
* [Valerie Jane Thoma](https://github.com/ValerieThoma)
**Charming ~~Genius~~|Likes Giraffes|Lives for Hugs|can now officially say she's a React Developer**

## Acknowledgments:
* Special thank you Robert Bunch, our Ambassador of Quan. 

## Project History: 
12/19/2017 

