
User.destroy_all

guest = User.create!(email: "1note@gmail.com", password: "1note111111")

Notebook.destroy_all

guest_nb1 = guest.notebooks.create!(title: "1note")
guest_nb2 = guest.notebooks.create!(title: "Jokes")
guest_nb3 = guest.notebooks.create!(title: "Movie Quotes")
guest_nb4 = guest.notebooks.create!(title: "Data Structures")

Note.destroy_all


g_note1 = guest.notes.create!(title: "Welcome to 1note!",
                                  body: "1note is a note-taking app ",
                                  notebook_id: guest_nb1.id
                              )
g_note2 = guest.notes.create!(title: "Rich Text",
                                  body: "new",
                                  notebook_id: guest_nb1.id
                              )


g_note3 = guest.notes.create!(title: "Revenge of the Sith",
                                body:  "You were the chosen one! It was said that you would destroy the Sith, not join them.\n \nYou were to: \n\nbring balance to the force \nnot leave it in darkness\n",
                                notebook_id: guest_nb3.id
                                )


g_note4 = guest.notes.create!(title: "Mitch Hedberg",
                                body: "My fake plants died because I did not pretend to water them.",
                                notebook_id: guest_nb2.id 
                              )
g_note5 = guest.notes.create!(title: "George Carlin",
                                body: "Think of how stupid the average person is, and realize half of them are stupider than that.",
                                notebook_id: guest_nb2.id
                              )

g_note6 = guest.notes.create!(title: "Computers",
                                body: "There are 10 kinds of people in the world: those that understand binary, and those that do not.",
                                notebook_id: guest_nb2.id
                              ) 
