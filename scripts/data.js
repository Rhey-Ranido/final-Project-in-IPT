const students = [
    {
        firstname: 'Christian Rhey',
        lastname: 'Ranido',
        gender: 'male',
        classTitle: 'The Script Kiddie',
        Age: 19,
        birthdate: 'Nov 19, 2003',
        Quote: "Love me now for life is short - charut"
    },
    {
        firstname: 'Shaira',
        lastname:'Elacion',
        gender: 'female',
        classTitle: 'Ms.Nobody',
        Age: 19,
        birthdate: 'Dec. 19, 2003',
        Quote: "No matter how you feel,get up,dress up,show up and never give up💖"
    },
    {
        firstname: 'Ivan',
        lastname: 'Yakit',
        gender: 'male',
        classTitle: '#Always_Present',
        Age: 19,
        birthdate: 'January 17, 2004',
        Quote: "Work hard to receive a x2 reward 💵💰 -Ivan2023😎"
    },
    {
        firstname:'Vincent Jethro',
        lastname: 'Darang',
        gender: 'male',
        classTitle: 'Mr. Late',
        Age: 19,
        birthdate: 'September 4,2004',
        Quote: "Don't stop when you're tired stop when you are done💗"
    },
    {
        firstname: 'Angelica', 
        lastname:'Cabayaran',
        gender: 'female',
        classTitle: 'Ms.Quesin',
        Age: 19,
        birthdate: 'July 17, 2004',
        Quote: "Work hard, stay disciplined and be patient, Your time will come🤍"
    },
    {
        firstname: 'Kurt Kerr',
        lastname: 'Zapanta',
        gender: 'male',
        classTitle: 'bughat',
        age: 19,
        birthdate: 'March 17,2004',
        Qoute: 'just do better..'
    },
    {
        firstname: 'Mary grace',
        lastname:'Bergado',
        gender: 'male',
        classTitle: 'Ms. Quesin',
        Age: 20,
        birthdate: 'August 21 2003',
        Quote: 'Just do better',
    },
    {
        firstname: 'Nelson',
        lastname: 'Daganio',
        gender: 'male',
        classTitle: 'Bulok',
        Age: 19,
        birthdate: 'May 11, 2004',
        Quote: "Cracking codes today, breaking barriers tomorrow"
    },
    {
        firstname: 'Regine',
        lastname: 'Betorio',
        gender: 'female',
        classTitle: 'Rghena',
        Age: 19,
        birthdate: 'January 3, 2004',
        Quote:  "BAGAN KAMO, PERO DIRE  char-char"
    },
    {
        firstname: 'Kean Edward',
        lastname: 'Cabello',
        gender: 'male',
        classTitle: 'Unconditional',
        Age: 19,
        birthdate: 'June 29 2004',
        Quote: "Silence is better than to talk"
    },
    {
        firstname: 'Kristine',
        lastname: 'Catalogo',
        gender: 'female',
        classTitle: 'Supportive Samaritan',
        Age: 20,
        birthdate: 'August 21 2003',
        Quote: "Trust the process, mapasar kita"
    },
    {
        firstname: 'Niel Justin', 
        lastname:'Palconit',
        gender: 'male',
        classTitle: 'Squirt',
        Age: 19,
        birthdate: 'August 7 2004',
        Quote: "Never give up"
    },
    {
        firstname: 'Rodel', 
        lastname:'Doblon',
        gender: 'male',
        classTitle: 'Mr. Smiley',
        Age: 19,
        birthdate: 'April 22, 2004',
        Quote: "Love me or hate me"
    },
    {
        firstname: 'April Rose', 
        lastname: 'Ogario',
        gender: 'female',
        classTitle: 'Roses',
        Age:  19,
        birthdate: 'April 19, 2004',
        Quote: "Do not chase butterflies, take care of the garden and they'll come to you."
    },
    {
        firstname: 'Trishia Claire',
        lastname: 'Nadores',
        gender: 'female',
        classTitle: 'Basta la',
        Age: 19,
        birthdate: 'February 5 2004',
        Quote: "Enime-eme lang"
    },
    {
        firstname: 'Gwen Adarne',
        lastname: 'Lavilla',
        gender: 'female',
        classTitle: 'Gfhere',
        Age: 19,
        birthdate: 'March 8 2004',
        Quote: "There is nothing impossible for those who will try"
    },
    {
        firstname: 'Bryan Tristan',
        lastname: 'Colandog',
        gender: 'male',
        classTitle: 'Destined with you',
        Age: 21,
        birthdate: 'May 22, 2002',
        Quote: "Success is not just a destination; it's the culmination of resilience."
    },
    {
        firstname: 'Jamela Jean',
        lastname: 'Ogania',
        gender: 'female',
        classTitle: 'Ambot, masubad kuno',
        Age: 21,
        birthdate: 'January 20, 2002',
        Quote: "Kun kaya hit iba, ano naman"
    },
    {
        firstname: 'Prince Client Carl', 
        lastname: 'Cinco',
        gender: 'male',
        classTitle: 'Absent pag may Klasi',
        Age: 19,
        birthdate: 'Dec 18, 2003',
        Quote: "If i can make it Sana"
    },
    {
        firstname: 'Trixie Nicole',
        lastname: 'Sabulao',
        gender: 'female',
        classTitle: 'Ms. Sleepyhead',
        Age: 20,
        birthdate: 'May 2, 2003',
        Quote: "If you can't take it anymore, take it anyway"
    },
    {
        firstname: 'Jemirson',
        lastname: 'Daganio',
        gender: 'male',
        classTitle: 'Mr. Chalant',
        Age: 18,
        birthdate: 'May 16, 2004',
        Quote: "In the middle of every difficulty lies opportunity"
    },
    {
        firstname: 'Jonalyn', 
        lastname: 'Dado',
        gender: 'female',
        classTitle: 'shalala',
        Age: 20,
        birthdate: 'March 28, 2003',
        Quote: " pray, wait, trust"
    },
    {
        firstname: 'Clint', 
        lastname: 'Espineda',
        gender: 'male',
        classTitle: 'Major in Marites',
        Age: 23,
        birthdate : 'June 6, 2000',
        Quote: "Your destination is more important than your speed"
    },
    {
        firstname: 'Vladimir', 
        lastname: 'Biston',
        gender: 'male',
        classTitle: 'Mr.Rebound',
        Age: 20,
        birthdate: 'Aug 12, 2003',
        Quote: "Trust the process"
    },
    {
        firstname: 'Kathlyn', 
        lastname: 'Caagahon',
        gender: 'female',
        classTitle: 'Ms. Prentender',
        Age: 19,
        birthdate: 'July 3 2004',
        Quote: "Just enjoy Your Life But Don't Forget the Word Limitations"
    },
    {
        firstname: 'Ailene', 
        lastname: 'Abuda',
        gender: 'female',
        classTitle: 'Pinaka buotan',
        Age: 19,
        birthdate: 'July 7,2004',
        Qoute:"Be the only one, NOT the best one"
    },
    {
        firstname: 'Adriana', 
        lastname: 'Oprin', 
        gender: 'female',
        classTitle: 'The procrastinator ',
        Age: 20,
        birthdate: 'July 11, 2003',
        Quote: "pag may problema ka sumuko ka na lang, kaya ka nahihirapan eh laban ka nang laban"
    },
    {
        firstname: 'Richelle',
        lastname: 'Duran',
        gender: 'female',
        classTitle: 'Ms. Nobodyperson',
        Age: 20,
        Bdate: 'Nov 12, 2003',
        Quote: "The only way to do great work is to love what you do"
    },
    {
        firstname: 'Fritz Kerby',
        lastname: 'Dela Cruz',
        gender: 'male',
        classTitle: 'maupay lugod',
        Age: 20,
        birthdate: 'August 14, 2003',
        Quote: 'Ayla²'
    },
    {
        firstname: 'John Philip', 
        lastname: 'Balibalos',
        gender: 'male',
        classTitle: 'Ang Mga Batang Ito ay Kaylangan',
        Age: 19,
        birthdate: 'December 18, 2003',
        Quote: 'HAHAHAHAHAHAHAHA'
    },
    {
        firstname: 'Angelica', 
        lastname: 'Dadul',
        gender: 'female',
        classTitle: 'The Secret',
        Age: 23,
        Bday: 'February 12 2000',
        Quote: "If you want to be part of my life make sure you are ready to accept my stupid side "
    },
    {
        firstname: 'Arjay',
        lastname: 'Acid',
        gender: 'male',
        classTitle: '',
        Age: 19,
        Bithday: 'June 26 ,2004', 
        Quote: 'The only way to do great work is to love what you do.'
    },
    {
        firstname: 'Christopher', 
        lastname: 'Abletes',
        gender: 'male',
        classTitle: 'Mikos mikos nayan insan',
        Age: 19,
        Bday: 'November 27 2003',
        Quote: "me ako ak ome"
    },
   { 
        firstname: 'Jessa',
        lastname: 'Menguin',
        gender: 'female',
        classTitle: 'Ms. Maldita ',
        Age: 21,
        Bday: 'March 28, 2002',
        Quote: "Success begins outside your comfort zone."
   },
   {
        firstname: 'Alvin Cart', 
        lastname: 'Alvarez',
        gender: 'male',
        classTitle: 'mamingaw na klasen nilalang',
        Age: 20,
        Bday: 'September 27 2003',
        Quote: "Amen"
   },
   {
        firstname: 'Marvin', 
        lastname: 'Opriasa',
        gender: 'male',
        classTitle: 'N/A',
        Age: 18,
        birthdate: 'December 28 2004',
        Quote:"Experience shapes me, each moment a stepping stone to growth."
   },
   {
        firstname: 'Janean Marie', 
        lastname: 'Salamida',
        gender: 'female',
        classTitle: 'Silent sage',
        Age: 18,
        Bdate: 'November, 01, 2005',
        Quote: "Strive for progress, not perfection"
   }
]

