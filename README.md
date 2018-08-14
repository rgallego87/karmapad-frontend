# KarmaPAD

Editor designed for editors, bloguers, journalists, copywritters and whoever that is searching for preflight valoration of its own text. App is based on AI Algorithm who knows what is negative and positive inside of a text. For this, each word has different value and also depending on which text context is used.
For example, I could review an important email before send to check if the vocabulary is on the positive way. Maybe you could review a formal letter or a post for an important blog.

## User Stories

  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
  
  **Signup:** As an anon I can sign up in the platform so that I can start saving my own texts to check after with the algorithm.
  
  **Login:** As a user I can login to the platform so that I can see my saved texts.
  
  **Logout:** As a user I can logout from the platform so no one else can use it. 

  **List text templates** As a user I want to see text examples so that I can choose one to begin my own with some suggestions to be positive.
 
  **Create text** As a user I want to add a my own text so that I can save for review after.

  **See my texts** As a user I want to see my texts that I wrote before.

  **Analize my text** As a user I want to analize my own text to see how positive it is.

## Backlog

  **Edit my profile** As a user I want to edit my profile with more information about me.

  **View others profile** As a user I want to see others profile with its texts.

  **Edit text** As a user I want to edit my own text and reanalize again.

  **Chat with analyze** As a user I want to view how are all the messages on a chat

  **Text suggestions** As a user I want to recieve word suggestions to improve my texts on the way to make more positive.  

  **Voice to text** As a user I want to write text without hands, only with my voice.

# External APIs

 - Microsoft Azure
  
# Client

## Routes (Guards)

  - / - Homepage with text templates (Anon user)
  - /auth/signup - Signup form (Anon user)
  - /auth/login - Login form (Anon user)  
  - /texts/create - (Logged user)  
  - /texts/:id - (Logged user)
  - /texts/:id/analize - (Logged user)
  - /texts/my-texts - (Logged user)

  ### Backlog

  - /user/me - my details (Logged user)
  - /user/:id - details of some user id and its texts (Logged user)
  - /texts/:id/edit - edit one text (Logged user)

## Services

- Auth Service
  - me()
  - login(user)
  - signup(user)
  - logout()
  - getUser()
  - setUser()
- Profile Service
  - me()
  - edit()
- Text Service
  - CreateOne()
  - listTextTemplates()
  - getAllById(id)
  - getOne(id)
  - analyze(id)

## Pages

- 404 Page
- Sign in Page
- Log in Page
- Home Page (List text templates)
- Add and analize text page
- Text Detail Page
- My Profile Page

## Components

- Navbar
- Text List
- Text Card
- Text Editor 

## IO

- Text List Page inputs single text to text card component
- Login/Sign up form outputs the form to the parent component
- Text Editor form outputs the form to the parent component

## Guards

- if logged in cannot access login/signup page
- if not logged in cannot access profile page

# Server

## Models

  User model

  ```
  username - String // required  
  password - // required
  ```

  Text model

  ```
  title - String // required
  body - String // required
  owner - ObjectId // UserId  
```

## API Endpoints/Backend Routes
  
  ### Auth

  - GET /auth/me
  - POST /auth/signup
  - POST /auth/login
  - POST /auth/logout  

  ### Text

  - POST /texts/create
  - GET /texts/:id
  - POST /texts/:id/analize  
  - GET /texts/my-texts

# Links

- [Backend Repo](https://github.com/rgallego87/karmapad-backend/edit/master)
- [Wireframes](https://www.draw.io/?lightbox=1&target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=KarmaPAD.xml#R7V1bc%2BI4Fv411DyFkiVfH3Pp7unadE9XJ7NTuy9bCijgjbFZYzrJ%2FPqV5EuwJYMwsjGGpLoJwjayvnN0bp%2BsEbpdvH2J8XL%2BLZqSYATB9G2E7kYQQuC49IW1vKctnps1zGJ%2FmjYZHw0P%2Ft8kawRZ69qfklXpwCSKgsRflhsnURiSSVJqw3EcvZYPe46C8rcu8YwIDQ8THIitf%2FnTZJ62utD5aP%2Bd%2BLN5%2Fs2G7aWfPOHJyyyO1mH2fSOInvlP%2BvEC59fKbnQ1x9PodaMJfRqh2ziKkvSvxdstCdjY5sOWnve55tOi3zEJE6UTkJWe8gsHa5L3mfcsec9HY4pXc8JOACN0Q3u8ZO0xH%2FebZz8IbqMgivmh%2Bc3Sw5I4eiH5J2EU0nNu%2BMAUVwrwEwluigGrHPschclnvPADJkK%2Fk%2BAXSfwJzj7Y%2BEbAf2g7DvxZSNsC8sw6lt0WiRPyVjs4RjHkVJRJtCBJ%2FE4PyeU4G5tMiJ0Ms9cPiUDQTtvmG9Jg2dmBOJPCWXHlDyToHxkYdcDYAjAG7es1Anvhk49KnPavihcAjmff1OFVGerP%2FIcdvMQTP5z9zO7Z%2FGh6jJa0wcjOfcj6CPL3qaIbiMkCWdF3uXYZyoilAititgsVaKZtMQlw4v8qK%2FphSDkNVWjxNmPT53i2mAbjJFr%2B5wnHdVAoDo69VaCNkjyDsSUItCkZOWPfkcu%2B%2F0fk044VX37lwdLXXznlK0TPzyuSCCNf3IUiGK4Axj9wvMA%2Fru%2F20hu5PlSVx7OpYUM3UnHeEHgIditTqjlXTDUYynSuC64z3V340ynrc37oPZ%2Fh7hzYdNZrqkOWc5gkvJdVUTPyng41XMbkmdChmjD3Q1EKTMhFQHHsXfnYb1HKfLxKSmlrUcr8MrlOui0gA03Rx3j4%2BuU7bfnzx3aIcume0PEjccWKwJ3eCDQ8%2BzPaZt1yC2Wk10p9MUPU1sKv2ceFOUwg8lMcpwRRjtiGfNhOvbk7xLJBU5xM7%2F%2F4Qhu%2Bfr%2FgtgM3aHrHws0woY6pcIHjmR%2F%2BTBFiQH3jDfQwt9RwEyVJtGDGy1QOCOgnhP9U8UvtaBFcfTR16CkiZwwt17Jtz3END1F3VYfVcytn6LF6pilA%2FQ37AfUSRuzekAGK8doAn45bInE0njIkK44GNCX%2Be0XRPP5zAFqpzG5Fi4ZgY9tCNjKga3qGbUj0xwR6XBSvFbAkhnC9pBMkBAw0%2BvJIFkvacaKKWI1rWEWM3Wdt4DwMxPI5TzNiYhR%2Bh995b%2FFySehwTMcMtjlFDCQUPLJKOHA%2Bv06MZ3SOZUNCRwQCamr8hR%2F6fOaF4HnN%2BkFHGzyt2VkJv8qrH7LpkH1Fso5DfmQSFR%2BvonUyvyJ4lbAv%2FsrOe6X3TG%2BcXRH%2FitYxfgrYkZM5DmfsDxxOi9MfcfiCp9TDZe0z7IfjOlF7nfsJYWLFml%2BpWcjbHsptmeQx0bEr84Qpkdgk2jipMB1ACISMlkUTGcbYRMCwHctzHCqkomTmScsDJdMAbXjVhimmHf58%2BMRk4vHA2UOWrqlMHuatdXdzLfP0PsShuMyGr3YYfO%2BlUzbA9FzJvKIHvSurnYlFS7Sq6qJlOnUa%2FlkRCZtQjIWlHht10sa2abqW5xoIuKbRY4fNMgTg%2F1hSmxCFzA4E0cn5bV6fvADUDmZiPPUtor2kPd2A7QQ8tl5h1Y7HlhvyDayod8b9ndf0ZUWvx14oHsxvip4z54mCtGB%2Fsi6GEQe28JxW7IwnMsH81EXELzT1qZ8XTpL0HgoHbT1Qn2q38Jy8T2WJ0fRgfKoa%2BAbkU1lisKbdpzotD8oRk45SBwqZY9cDnm05CALXgX3OeFlNy617VfYOtLQ7kBG1TQqLLnUz25ksxepAA3VjjBmZ8hRqVQdNekYODVSGJpWf2rw9GFdoH7KKXF4Sb6NMXi73tFMltxSizxwteqq%2FXJF%2BYTR8iHISkQpE0pntqPg4gwdI9BQFeHLX8J5VG39EK5%2BHixvhutyPnyeLYFQpbTKwynNpCTlDMrvS2CWO%2FOl4OacmDu7jt0wA%2B6Wf0AtNffLhpO5VH90qITn%2F8b38dtMgIon%2FaWuh1rlNDdcZcB5Ns6y5rgQZ2xCRsVwtyIh26UJ6LCS2QSm7NdKjp2CeOiI9ujWR7dmQHiHooJjQq8C3Th%2BGHPgWiyN6HfjuQKajwDfroFvRPStXfs3AiCWdBurXdSCcydNZB8LMu%2BhzILwbozOASCzo1ELUdSC8G5%2FhB8LQ6GQJWb1b0bsAq84GSq2SLMAyJIUzBDUEWAULeZOByO4QgvVSAE2xwjUSq5SwGgzJnT2h0KWodArEXtkQ2vvWrdWHVcLFWpE45OVi%2BaiWy4PFAG4IoQvYrySKLIWddnNnrfFAIj0EALeV1SbGHrntwA%2BJMPuz8QsjnrTL3tXPRLpHvrAbwLShMDFA1xwDCwKKClt%2F4EhDfj3YGCZoAxwoxjA%2F8Gr1GsXTEu9pJwXqoj50LrdbgUghmslA2BxZu2QQYD1E1fyYxujz6Ih4qBVEFIIUhVxb7ONwFojxizwT4AD2qzzyO9LKYtyfZzNKSeTDUMidXlhe1Gi0A4pCWCIF5WJzahfdGK04BFD0eX9%2B%2BvL14fHTT5WJDY1EV7Yyb9Fx%2BfwZVk0L2OY7a3Z9pbluCadLonR7e8V1me5ySe%2BqWqrTtJZYrLt%2BZQTO92jNviuICZ6yAZnjX3yJy2RCw0DWTepTBAzaJ%2FrHLI3l0gaG5Yg9SiaH0%2F7fOkoPQAh5Hnt2y0dTem4WM%2FkhH8uY5Nei3U8vV%2F4K2rzxtXKR26j6cgXni3hSIVqykeajaN2MrDsmPeskWmXyKUapW%2Bmhm0sB9o2GtcgoKuckCjbx5pyDJHKqJf41Rf%2Fz8ngI1fxF24%2BHyLpUkY9WrLepJWXf9sMiMnHdUuca4MMitDi7FBiqcnOZH1VAUAdN01xwHVjKdWhDVofWA92VbXWBXVOfuIQd7UhCp7GOVUoZJas9kHLdbRckMT92eaiHonQU%2FkPuYYvi0drDWAzR8xXwujAOtxDbytAhSd2lNcohtA7kbgyZcug6ZWQ6pRxCyXrcC%2BWwkNj9g4DWKIdQsgq3gXehg3KYCc0BTsTJUw4ly2wbgHE6lMNafRg05VCyHnavWbELyuEuZAZJObSacm6OSzlM5WlLCeIMKIcqq5SPSTncidEZQKSwxPholMOd%2BJwB5bDx0uOBUg5rbWAPKIeStcb37HE5vHpWwayvjENLoSLSLeNQsjz4FBiHTQey14xDW0wh1JqLo7E%2F6ka%2BN%2ByPlhiH%2BU0NgnF4ZPVpiXFoK%2BQS%2Bso4PDYi7TAO7aZxf4eMw1RqduXgBsQ4tJvG%2FBeb0zHj0BZD%2FNoSa98ZhzswHD7j0BaTARuMw2kU%2Fsb61AnfkK3RuvAN95RQFb4hlEipluDXvmxH1V6p8YT4hraYBGngULXON7TPb3Mqpykz4%2Bh8wzqwzodv6Ghh8bbLNzwYpVPnGzpiAuay%2B5uqeByTcOgopGUuhMP6mktlCuyWcOgcyNwYMuHQgJUSabeMQ0fM41wYh4XI7h8GtMc4dBSoGh0xDp19Fn4OknHoKJAyBsU4rNOHQTMOnQOZHZ0wDncgM0jGoaMlg9E549DZVYI4A8ahq5DiOCbjcCdGZwDRHhSSzhmHO%2FE5A8ahK2Yx9rJLg2Mc1tnAHjAOXTFxcRsTvqsyq9rFI7ZV7xuTIL6vLg5x8P534y2XR12TEVNR3J9y0h4ZUfIw%2BOvv1%2Ff%2F%2BvenukHtbbm7bnDPpdyNJM%2B1evSTQFQP1dkum5WkjrmQdM1lwtsyXZUrlEz1FLZQVCpZ60%2Fv7hKncoXLkpSmXVlp2tCgtUiyhc3v%2FgjebnAhv9KP%2F7vmW5q%2FYqpH03zOnMwJdeSzJyClu2SuCJtf%2FQ9qBMWWf8judxngMN0i02cv6%2BUkWjB02Kac5IWEfBf1vziDIibpceFLegDfn3NO8DR9yzkQvA%2Ff8RKz0%2B6Z0IM1u%2B5LyHdOzzvxG%2BtA4L%2BQ%2FJRZVHT3lfzGh2OB%2Bcd0diZxuqHrqnb7zir7sG4v3UYSKtoHSS5BSeoyHd5qIaRyZUA0tm2qaSj7X8%2F%2Bc04rE5Vk%2F%2FOH639eLI5Gi2O4ViX2aoljlScQLzSZFvLjJ0ST8bSsKm%2BdJuPVqOyAaTKeFkb4MWgydWCdD03G07JYvF2azMEonThNBuWYlJ5S%2B%2FDn%2FeODgFVfExN7pYRMoJgT0kKH8BSKhxcuyzbGxDGfnuUdWBQcNJnF9sqTo9cpmcUTy4IXMkshsj0isyCgUAXsiMySCs0Zk1kQ0MJcPiEyS50%2BDJnMgoDo0%2B01K3ZCZtmBzBDJLAhoyTN0TWbJ5OmsySwIKCQijkhm2Y3RGUCkkG84FpllNz7DJ7Mg0JTXPFQyS50NPIjMYiINARYCYubiG%2BsaSwKtBNR6mhrKJK5HnBXk7j9JHSD2BzhoSmOXe5qbY%2BfpqQKWp0MDteKQueKM9Jg%2B6AC8pi%2BraMFfqPixSj9nBWD6j0r5gv3JehxGUe0z5WQV%2BLo5RJ7oq8wsm5kCS1St7O1Nljy8E5krfAljU6Fwd%2B90CIE1dhE0AQuabGS7khR5i%2FolzlsG%2B%2FJ4H4AkD3SqJHUqT4GqpnCgiHKVpbEFIev4AGl60E2%2BCFez1jbNyypmMTINyVsyMUgVpzIZ39yx34PSUrWQvW2Ha5OMYY5NF5im7UEHOabEoHk6fAJXYS3GxXYx21WJtmDVJdOjBxL%2B648oZvy4IOIMuRVer%2FCM2685Dl8Ym5JeFbz4JHjCK2bGnvCE2S7wRAizbLH%2FVOvcDc2S1SSDe2PJPDFXe16WTA9AvbZkEgLaSVuy7QWW%2FlgyFcLXxZJJLBlFr53UuITodUsjMX6vT0G0onEYi7%2B4WaPv6XxzHmbKU%2BBUH9dMiQkNeE5mShNA%2FTZTWh5I0RszVQdZ38yUqVKuv5gpiZky27BRpqSufoffee%2FxcknoePD1RI9zvvCHLJaEL2FaJT6%2FTkxDsSkfEzokEKzDqb%2FwQ5%2BrzVkYs0ye%2B2vMTEmBnj2%2BGyyY37HPU%2FuHZeR0AddnI2eqVPhPx8jVQtY3I4cM0bm4LMKqoNmY13k6i7CQoeVBW20vwsrEdQujcHCLsJChpd5yhEVYtWCdzSIsZGh5flari7AOR%2BnkF2EpxHmXZUL1AmK75WlQsteCtmVC9G0csV0yPsBmI%2FQtmrIdbT79Hw%3D%3D)
- [Trello](https://trello.com/b/pmdANZar/karmapad)
- [Deploy]

