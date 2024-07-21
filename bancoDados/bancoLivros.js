const bancoLivros = [
    {
        titulo: 'A Coragem de Ser Imperfeito',
        autor: 'Brené Brown',
        genero: 'Autoajuda'
    },
    {
        titulo: 'O Livro da Arte',
        autor: 'John Smith',
        genero: 'Arte'
    },
    {
        titulo: 'A História da Arte',
        autor: 'E.H. Gombrich',
        genero: 'Arte'
    },
    {
        titulo: 'A Arte da Guerra',
        autor: 'Sun Tzu',
        genero: 'História'
    },
    {
        titulo: 'História do Brasil',
        autor: 'Boris Fausto',
        genero: 'História'
    },
    {
        titulo: 'Como Fazer Amigos e Influenciar Pessoas',
        autor: 'Dale Carnegie',
        genero: 'Autoajuda'
    },
    {
        titulo: 'O Poder do Hábito',
        autor: 'Charles Duhigg',
        genero: 'Autoajuda'
    },
    {
        titulo: 'Inteligência Emocional',
        autor: 'Daniel Goleman',
        genero: 'Psicologia'
    },
    {
        titulo: 'O Código da Mente Extraordinária',
        autor: 'Vishen Lakhiani',
        genero: 'Psicologia'
    },
    {
        titulo: '1984',
        autor: 'George Orwell',
        genero: 'Ficção'
    },
    {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        genero: 'Ficção'
    },
    {
        titulo: 'A Arte da Felicidade',
        autor: 'Dalai Lama',
        genero: 'Autoajuda'
    },
    {
        titulo: 'A Psicologia das Cores',
        autor: 'Eva Heller',
        genero: 'Psicologia'
    },
    {
        titulo: 'Cem Anos de Solidão',
        autor: 'Gabriel Garcia Marquez',
        genero: 'Ficção'
    },
    {
        titulo: 'O Pintassilgo',
        autor: 'Donna Tartt',
        genero: 'Ficção'
    },
    {
        titulo: 'Uma Breve História do Tempo',
        autor: 'Stephen Hawking',
        genero: 'História'
    },
    {
        titulo: 'A Arte da Iluminação',
        autor: 'Ralph Mayer',
        genero: 'Arte'
    },
    {
        titulo: 'História das Ideias Políticas',
        autor: 'Eric Voegelin',
        genero: 'História'
    },
    {
        titulo: 'Mindset: A Nova Psicologia do Sucesso',
        autor: 'Carol S. Dweck',
        genero: 'Autoajuda'
    },
    {
        titulo: 'O Estrangeiro',
        autor: 'Albert Camus',
        genero: 'Ficção'
    },
    {
        titulo: 'A Revolução dos Bichos',
        autor: 'George Orwell',
        genero: 'Ficção'
    },
    {
        titulo: 'A Origem das Espécies',
        autor: 'Charles Darwin',
        genero: 'Ciência'
    },
    {
        titulo: 'O Universo Numa Casca de Noz',
        autor: 'Stephen Hawking',
        genero: 'Ciência'
    },
    {
        titulo: 'Sapiens: Uma Breve História da Humanidade',
        autor: 'Yuval Noah Harari',
        genero: 'História'
    },
    {
        titulo: 'Homo Deus: Uma Breve História do Amanhã',
        autor: 'Yuval Noah Harari',
        genero: 'História'
    },
    {
        titulo: 'Pense e Enriqueça',
        autor: 'Napoleon Hill',
        genero: 'Autoajuda'
    },
    {
        titulo: 'O Alquimista',
        autor: 'Paulo Coelho',
        genero: 'Ficção'
    },
    {
        titulo: 'A Sutil Arte de Ligar o F*da-se',
        autor: 'Mark Manson',
        genero: 'Autoajuda'
    },
    {
        titulo: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry',
        genero: 'Ficção'
    },
    {
        titulo: 'Mente, Cérebro e Educação',
        autor: 'Antonio R. Damasio',
        genero: 'Psicologia'
    },
    {
        titulo: 'O Gene: Uma História Íntima',
        autor: 'Siddhartha Mukherjee',
        genero: 'Ciência'
    },
    {
        titulo: 'A Guerra dos Tronos',
        autor: 'George R.R. Martin',
        genero: 'Ficção'
    },
    {
        titulo: 'O Hobbit',
        autor: 'J.R.R. Tolkien',
        genero: 'Ficção'
    },
    {
        titulo: 'Meditações',
        autor: 'Marco Aurélio',
        genero: 'Filosofia'
    },
    {
        titulo: 'O Grande Gatsby',
        autor: 'F. Scott Fitzgerald',
        genero: 'Ficção'
    },
    {
        titulo: 'Crime e Castigo',
        autor: 'Fiódor Dostoiévski',
        genero: 'Ficção'
    },
    {
        titulo: 'O Morro dos Ventos Uivantes',
        autor: 'Emily Brontë',
        genero: 'Ficção'
    },
    {
        titulo: 'Dom Quixote',
        autor: 'Miguel de Cervantes',
        genero: 'Ficção'
    },
    {
        titulo: 'O Príncipe',
        autor: 'Nicolau Maquiavel',
        genero: 'Filosofia'
    },
    {
        titulo: 'Fundação',
        autor: 'Isaac Asimov',
        genero: 'Ficção Científica'
    },
    {
        titulo: 'Duna',
        autor: 'Frank Herbert',
        genero: 'Ficção Científica'
    },
    {
        titulo: 'Neuromancer',
        autor: 'William Gibson',
        genero: 'Ficção Científica'
    },
    {
        titulo: 'O Fim da Infância',
        autor: 'Arthur C. Clarke',
        genero: 'Ficção Científica'
    },
    {
        titulo: 'O Jogo do Exterminador',
        autor: 'Orson Scott Card',
        genero: 'Ficção Científica'
    },
    {
        titulo: 'A Máquina do Tempo',
        autor: 'H.G. Wells',
        genero: 'Ficção Científica'
    },
    {
        titulo: 'Fahrenheit 451',
        autor: 'Ray Bradbury',
        genero: 'Ficção Científica'
    },
    {
        titulo: 'Frankenstein',
        autor: 'Mary Shelley',
        genero: 'Terror'
    },
    {
        titulo: 'Drácula',
        autor: 'Bram Stoker',
        genero: 'Terror'
    },
    {
        titulo: 'It: A Coisa',
        autor: 'Stephen King',
        genero: 'Terror'
    },
    {
        titulo: 'O Iluminado',
        autor: 'Stephen King',
        genero: 'Terror'
    },
    {
        titulo: 'O Chamado de Cthulhu',
        autor: 'H.P. Lovecraft',
        genero: 'Terror'
    },
    {
        titulo: 'O Exorcista',
        autor: 'William Peter Blatty',
        genero: 'Terror'
    },
    {
        titulo: 'O Corvo',
        autor: 'Edgar Allan Poe',
        genero: 'Poesia'
    },
    {
        titulo: 'Folhas de Relva',
        autor: 'Walt Whitman',
        genero: 'Poesia'
    },
    {
        titulo: 'A Divina Comédia',
        autor: 'Dante Alighieri',
        genero: 'Poesia'
    },
    {
        titulo: 'Paraíso Perdido',
        autor: 'John Milton',
        genero: 'Poesia'
    },
    {
        titulo: 'Odisséia',
        autor: 'Homero',
        genero: 'Poesia'
    },
    {
        titulo: 'Ilíada',
        autor: 'Homero',
        genero: 'Poesia'
    },
    {
        titulo: 'Os Lusíadas',
        autor: 'Luís de Camões',
        genero: 'Poesia'
    },
    {
        titulo: 'O Código Da Vinci',
        autor: 'Dan Brown',
        genero: 'Mistério'
    },
    {
        titulo: 'Assassinato no Expresso do Oriente',
        autor: 'Agatha Christie',
        genero: 'Mistério'
    },
    {
        titulo: 'O Falcão Maltês',
        autor: 'Dashiell Hammett',
        genero: 'Mistério'
    },
    {
        titulo: 'O Silêncio dos Inocentes',
        autor: 'Thomas Harris',
        genero: 'Mistério'
    },
    {
        titulo: 'Sherlock Holmes: O Cão dos Baskervilles',
        autor: 'Arthur Conan Doyle',
        genero: 'Mistério'
    },
    {
        titulo: 'O Nome da Rosa',
        autor: 'Umberto Eco',
        genero: 'Mistério'
    },
    {
        titulo: 'O Cemitério',
        autor: 'Stephen King',
        genero: 'Terror'
    },
    {
        titulo: 'O Alienista',
        autor: 'Machado de Assis',
        genero: 'Ficção'
    },
    {
        titulo: 'O Enigma do Quarto 622',
        autor: 'Joël Dicker',
        genero: 'Mistério'
    },
    {
        titulo: 'Os Pilares da Terra',
        autor: 'Ken Follett',
        genero: 'Ficção Histórica'
    },
    {
        titulo: 'Guerra e Paz',
        autor: 'Liev Tolstói',
        genero: 'Ficção Histórica'
    },
    {
        titulo: 'O Conto da Aia',
        autor: 'Margaret Atwood',
        genero: 'Ficção Distópica'
    },
    {
        titulo: 'Admirável Mundo Novo',
        autor: 'Aldous Huxley',
        genero: 'Ficção Distópica'
    },
    {
        titulo: 'Laranja Mecânica',
        autor: 'Anthony Burgess',
        genero: 'Ficção Distópica'
    },
    {
        titulo: 'As Crônicas de Nárnia',
        autor: 'C.S. Lewis',
        genero: 'Fantasia'
    },
    {
        titulo: 'Harry Potter e a Pedra Filosofal',
        autor: 'J.K. Rowling',
        genero: 'Fantasia'
    },
    {
        titulo: 'O Leão, a Feiticeira e o Guarda-Roupa',
        autor: 'C.S. Lewis',
        genero: 'Fantasia'
    },
    {
        titulo: 'O Nome do Vento',
        autor: 'Patrick Rothfuss',
        genero: 'Fantasia'
    },
    {
        titulo: 'Mistborn: O Império Final',
        autor: 'Brandon Sanderson',
        genero: 'Fantasia'
    },
    {
        titulo: 'American Gods',
        autor: 'Neil Gaiman',
        genero: 'Fantasia'
    },
    {
        titulo: 'O Tigre de Sharpe',
        autor: 'Bernard Cornwell',
        genero: 'Aventura'
    },
    {
        titulo: 'A Ilha do Tesouro',
        autor: 'Robert Louis Stevenson',
        genero: 'Aventura'
    },
    {
        titulo: 'As Aventuras de Huckleberry Finn',
        autor: 'Mark Twain',
        genero: 'Aventura'
    },
    {
        titulo: 'A Volta ao Mundo em Oitenta Dias',
        autor: 'Júlio Verne',
        genero: 'Aventura'
    },
    {
        titulo: '20 Mil Léguas Submarinas',
        autor: 'Júlio Verne',
        genero: 'Aventura'
    },
    {
        titulo: 'Robinson Crusoé',
        autor: 'Daniel Defoe',
        genero: 'Aventura'
    },
    {
        titulo: 'O Conde de Monte Cristo',
        autor: 'Alexandre Dumas',
        genero: 'Aventura'
    },
    {
        titulo: 'Moby Dick',
        autor: 'Herman Melville',
        genero: 'Aventura'
    },
    {
        titulo: 'O Vento nos Salgueiros',
        autor: 'Kenneth Grahame',
        genero: 'Aventura'
    },
    {
        titulo: 'Viagem ao Centro da Terra',
        autor: 'Júlio Verne',
        genero: 'Aventura'
    },
    {
        titulo: 'O Senhor das Moscas',
        autor: 'William Golding',
        genero: 'Ficção'
    },
    {
        titulo: 'Anna Karenina',
        autor: 'Liev Tolstói',
        genero: 'Romance'
    },
    {
        titulo: 'Orgulho e Preconceito',
        autor: 'Jane Austen',
        genero: 'Romance'
    },
    {
        titulo: 'Jane Eyre',
        autor: 'Charlotte Brontë',
        genero: 'Romance'
    },
    {
        titulo: 'Emma',
        autor: 'Jane Austen',
        genero: 'Romance'
    },
    {
        titulo: 'O Morro dos Ventos Uivantes',
        autor: 'Emily Brontë',
        genero: 'Romance'
    },
    {
        titulo: 'Grandes Esperanças',
        autor: 'Charles Dickens',
        genero: 'Romance'
    },
    {
        titulo: 'David Copperfield',
        autor: 'Charles Dickens',
        genero: 'Romance'
    },
    {
        titulo: 'O Sol é Para Todos',
        autor: 'Harper Lee',
        genero: 'Ficção'
    },
    {
        titulo: 'O Retrato de Dorian Gray',
        autor: 'Oscar Wilde',
        genero: 'Ficção'
    },
    {
        titulo: 'O Velho e o Mar',
        autor: 'Ernest Hemingway',
        genero: 'Ficção'
    },
    {
        titulo: 'As Aventuras de Sherlock Holmes',
        autor: 'Arthur Conan Doyle',
        genero: 'Mistério'
    },
    {
        titulo: 'O Grande Mentecapto',
        autor: 'Fernando Sabino',
        genero: 'Ficção'
    },
    {
        titulo: 'Marília de Dirceu',
        autor: 'Tomás Antônio Gonzaga',
        genero: 'Poesia'
    },
    {
        titulo: 'A Metamorfose',
        autor: 'Franz Kafka',
        genero: 'Ficção'
    },
    {
        titulo: 'Memórias Póstumas de Brás Cubas',
        autor: 'Machado de Assis',
        genero: 'Ficção'
    },
    {
        titulo: 'Dom Casmurro',
        autor: 'Machado de Assis',
        genero: 'Ficção'
    },
    {
        titulo: 'Vidas Secas',
        autor: 'Graciliano Ramos',
        genero: 'Ficção'
    },
    {
        titulo: 'O Guarani',
        autor: 'José de Alencar',
        genero: 'Ficção'
    },
    {
        titulo: 'Senhora',
        autor: 'José de Alencar',
        genero: 'Ficção'
    },
    {
        titulo: 'O Primo Basílio',
        autor: 'Eça de Queirós',
        genero: 'Ficção'
    },
    {
        titulo: 'Os Maias',
        autor: 'Eça de Queirós',
        genero: 'Ficção'
    },
    {
        titulo: 'A Moreninha',
        autor: 'Joaquim Manuel de Macedo',
        genero: 'Ficção'
    },
    {
        titulo: 'Iracema',
        autor: 'José de Alencar',
        genero: 'Ficção'
    },
    {
        titulo: 'O Cortiço',
        autor: 'Aluísio Azevedo',
        genero: 'Ficção'
    },
    {
        titulo: 'Amar, Verbo Intransitivo',
        autor: 'Mário de Andrade',
        genero: 'Ficção'
    },
    {
        titulo: 'Macunaíma',
        autor: 'Mário de Andrade',
        genero: 'Ficção'
    },
    {
        titulo: 'Capitães da Areia',
        autor: 'Jorge Amado',
        genero: 'Ficção'
    },
    {
        titulo: 'A Hora da Estrela',
        autor: 'Clarice Lispector',
        genero: 'Ficção'
    },
    {
        titulo: 'Laços de Família',
        autor: 'Clarice Lispector',
        genero: 'Ficção'
    },
    {
        titulo: 'O Tempo e o Vento',
        autor: 'Érico Veríssimo',
        genero: 'Ficção'
    },
    {
        titulo: 'Clarissa',
        autor: 'Érico Veríssimo',
        genero: 'Ficção'
    },
    {
        titulo: 'O Senhor das Moscas',
        autor: 'William Golding',
        genero: 'Ficção'
    },
    {
        titulo: 'O Silmarillion',
        autor: 'J.R.R. Tolkien',
        genero: 'Fantasia'
    },
    {
        titulo: 'O Apanhador no Campo de Centeio',
        autor: 'J.D. Salinger',
        genero: 'Ficção'
    },
    {
        titulo: 'Admirável Mundo Novo',
        autor: 'Aldous Huxley',
        genero: 'Ficção Distópica'
    },
    {
        titulo: 'Laranja Mecânica',
        autor: 'Anthony Burgess',
        genero: 'Ficção Distópica'
    },
    {
        titulo: 'Eu, Robô',
        autor: 'Isaac Asimov',
        genero: 'Ficção Científica'
    },
    {
        titulo: 'A Máquina do Tempo',
        autor: 'H.G. Wells',
        genero: 'Ficção Científica'
    },
    {
        titulo: 'O Guia do Mochileiro das Galáxias',
        autor: 'Douglas Adams',
        genero: 'Ficção Científica'
    },
    {
        titulo: '2001: Uma Odisseia no Espaço',
        autor: 'Arthur C. Clarke',
        genero: 'Ficção Científica'
    },
    {
        titulo: 'Contos de Imaginação e Mistério',
        autor: 'Edgar Allan Poe',
        genero: 'Mistério'
    },
    {
        titulo: 'O Pêndulo de Foucault',
        autor: 'Umberto Eco',
        genero: 'Mistério'
    },
    {
        titulo: 'O Segredo',
        autor: 'Rhonda Byrne',
        genero: 'Autoajuda'
    },
    {
        titulo: 'Os Sete Hábitos das Pessoas Altamente Eficazes',
        autor: 'Stephen R. Covey',
        genero: 'Autoajuda'
    },
    {
        titulo: 'A Magia da Realidade',
        autor: 'Richard Dawkins',
        genero: 'Ciência'
    },
    {
        titulo: 'O Gene Egoísta',
        autor: 'Richard Dawkins',
        genero: 'Ciência'
    },
    {
        titulo: 'Cosmos',
        autor: 'Carl Sagan',
        genero: 'Ciência'
    },
    {
        titulo: 'Bill Gates: A Estrada do Futuro',
        autor: 'Bill Gates',
        genero: 'Biografia'
    },
    {
        titulo: 'Steve Jobs',
        autor: 'Walter Isaacson',
        genero: 'Biografia'
    },
    {
        titulo: 'Einstein: Sua Vida, Seu Universo',
        autor: 'Walter Isaacson',
        genero: 'Biografia'
    },
    {
        titulo: 'Churchill: Uma Vida',
        autor: 'Martin Gilbert',
        genero: 'Biografia'
    },
    {
        titulo: 'Napoleão: Uma Vida',
        autor: 'Andrew Roberts',
        genero: 'Biografia'
    },
    {
        titulo: 'Alexandre, o Grande',
        autor: 'Robin Lane Fox',
        genero: 'Biografia'
    },
    {
        titulo: 'Cleópatra: Uma Biografia',
        autor: 'Stacy Schiff',
        genero: 'Biografia'
    },
    {
        titulo: 'O Diário de Anne Frank',
        autor: 'Anne Frank',
        genero: 'Biografia'
    },
    {
        titulo: 'Nelson Mandela: O Longo Caminho para a Liberdade',
        autor: 'Nelson Mandela',
        genero: 'Biografia'
    },
    {
        titulo: 'Malala: A Menina que Queria Ir para a Escola',
        autor: 'Adriana Carranca',
        genero: 'Biografia'
    },
    {
        titulo: 'Elon Musk: Como o CEO Bilionário da SpaceX e da Tesla Está Moldando Nosso Futuro',
        autor: 'Ashlee Vance',
        genero: 'Biografia'
    }
];

module.exports = bancoLivros;
