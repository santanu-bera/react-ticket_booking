export const MOVIES = [
  {
    id: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    name: 'Satyaprem Ki Katha',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/satyaprem-ki-katha-et00338378-1684751310.jpg',
    duration: 146,
    language: {
      id: '4c16401f-84b8-43c8-9c47-12bba9c4196b',
      name: 'Hindi',
    }
  },
  {
    id: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    name: 'Shibpur',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shibpur-et00362728-1687513150.jpg',
    duration: 132,
    language: {
      id: 'f1f235be-5f03-4b81-8bde-f7ec667d92c5',
      name: 'Bengali',
    }
  },
  {
    id: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    name: 'Indiana Jones and the Dial of Destiny',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/indiana-jones-and-the-dial-of-destiny-et00346122-1669975343.jpg',
    duration: 156,
    language: {
      id: 'c534ef4e-48ce-4124-b131-bf0be990f446',
      name: 'English',
    }
  },
  {
    id: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    name: 'Ardhangini',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ardhangini-et00359220-1683697967.jpg',
    duration: 135,
    language: {
      id: 'f1f235be-5f03-4b81-8bde-f7ec667d92c5',
      name: 'Bengali',
    }
  },
  {
    id: '82572593-7e21-448a-8dda-16ae24d585f0',
    name: 'Spy',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spy-et00359675-1686315922.jpg',
    duration: 135,
    language: {
      id: 'c534ef4e-48ce-4124-b131-bf0be990f446',
      name: 'English',
    }
  }
]

export const LANGUAGES = [
  {
    id: '4c16401f-84b8-43c8-9c47-12bba9c4196b',
    name: 'Hindi',
  },
  {
    id: 'c534ef4e-48ce-4124-b131-bf0be990f446',
    name: 'English',
  },
  {
    id: 'f1f235be-5f03-4b81-8bde-f7ec667d92c5',
    name: 'Bengali',
  }
]

export const HALLS = [
  {
    id: '2c0f32b9-0fd7-4389-98b6-0dd56e5ca6c0',
    name: 'Inox',
    place: 'South City',
  },
  {
    id: 'a4301392-97a0-4561-b5e8-bbcae298c132',
    name: 'PVR XL',
    place: 'Mani Square',
  },
  {
    id: '6c0ef8cc-05c0-416d-8c9a-4832162c12c2',
    name: 'Bioscope',
    place: 'Axis Mall',
  },
  {
    id: 'bd77a168-b07c-49fa-bd75-a2c013d0335c',
    name: 'Inox',
    place: 'Star Mall',
  },
  {
    id: 'b78722b7-aa9e-44f2-8d25-9bf518a9e4fe',
    name: 'PVR',
    place: 'Metro Cinema',
  },
]

export const SHOWTIMES = [
  {
    id: '74d5ac67-b313-4f23-a7a9-23b679a7f362',
    movieId: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    hall : {
      id: '2c0f32b9-0fd7-4389-98b6-0dd56e5ca6c0',
      name: 'Inox',
      place: 'South City',
    },
    time: '08:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '32c77c96-872b-4c58-8f8f-527d9e2e8661',
    movieId: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    hall: {
      id: 'a4301392-97a0-4561-b5e8-bbcae298c132',
      name: 'PVR XL',
      place: 'Mani Square',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: 'd4b4dbfe-bc2f-4f0d-9200-55d2a0778445',
    movieId: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    hall: {
      id: '6c0ef8cc-05c0-416d-8c9a-4832162c12c2',
      name: 'Bioscope',
      place: 'Axis Mall',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '9d31ad20-a8e2-4af5-a00f-0e333fc3360f',
    movieId: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    hall: {
      id: 'bd77a168-b07c-49fa-bd75-a2c013d0335c',
      name: 'Inox',
      place: 'Star Mall',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: 'e3261777-1165-41ee-abb8-2dcc77df3c77',
    movieId: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    hall: {
      id: 'b78722b7-aa9e-44f2-8d25-9bf518a9e4fe',
      name: 'PVR',
      place: 'Metro Cinema',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '8331abbf-2cff-4941-b7aa-1293bbfdfd27',
    movieId: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    hall: {
      id: '2c0f32b9-0fd7-4389-98b6-0dd56e5ca6c0',
      name: 'Inox',
      place: 'South City',
    },
    time: '09:00 AM',
    screen: 'Screen 2',
  },
  {
    id: '8c6f0dfa-b14b-42b0-925a-e324d7ea8478',
    movieId: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    hall: {
      id: 'a4301392-97a0-4561-b5e8-bbcae298c132',
      name: 'PVR XL',
      place: 'Mani Square',
    },
    time: '10:00 AM',
    screen: 'Screen 2',
  },
  {
    id: '765d9277-d4d7-484a-a935-93391274ba1d',
    movieId: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    hall: {
      id: '6c0ef8cc-05c0-416d-8c9a-4832162c12c2',
      name: 'Bioscope',
      place: 'Axis Mall',
    },
    time: '10:00 AM',
    screen: 'Screen 2',
  },
  {
    id: '12751145-a925-4101-8cce-ad01d4c45642',
    movieId: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    hall: {
      id: 'bd77a168-b07c-49fa-bd75-a2c013d0335c',
      name: 'Inox',
      place: 'Star Mall',
    },
    time: '10:00 AM',
    screen: 'Screen 4',
  },
  {
    id: 'acd8dcb8-2c54-4503-84a7-aafa7dc2e47b',
    movieId: '5c5c6b9a-d543-4c3d-acce-f9ca5217a3d9',
    hall: {
      id: 'b78722b7-aa9e-44f2-8d25-9bf518a9e4fe',
      name: 'PVR',
      place: 'Metro Cinema',
    },
    time: '10:00 AM',
    screen: 'Screen 2',
  },


  {
    id: '74d5ac67-b313-4f23-a7a9-23b679a7f362',
    movieId: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    hall : {
      id: '2c0f32b9-0fd7-4389-98b6-0dd56e5ca6c0',
      name: 'Inox',
      place: 'South City',
    },
    time: '08:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '32c77c96-872b-4c58-8f8f-527d9e2e8661',
    movieId: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    hall: {
      id: 'a4301392-97a0-4561-b5e8-bbcae298c132',
      name: 'PVR XL',
      place: 'Mani Square',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: 'd4b4dbfe-bc2f-4f0d-9200-55d2a0778445',
    movieId: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    hall: {
      id: '6c0ef8cc-05c0-416d-8c9a-4832162c12c2',
      name: 'Bioscope',
      place: 'Axis Mall',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '9d31ad20-a8e2-4af5-a00f-0e333fc3360f',
    movieId: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    hall: {
      id: 'bd77a168-b07c-49fa-bd75-a2c013d0335c',
      name: 'Inox',
      place: 'Star Mall',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: 'e3261777-1165-41ee-abb8-2dcc77df3c77',
    movieId: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    hall: {
      id: 'b78722b7-aa9e-44f2-8d25-9bf518a9e4fe',
      name: 'PVR',
      place: 'Metro Cinema',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '8331abbf-2cff-4941-b7aa-1293bbfdfd27',
    movieId: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    hall: {
      id: '2c0f32b9-0fd7-4389-98b6-0dd56e5ca6c0',
      name: 'Inox',
      place: 'South City',
    },
    time: '11:10 AM',
    screen: 'Screen 4',
  },
  {
    id: '8c6f0dfa-b14b-42b0-925a-e324d7ea8478',
    movieId: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    hall: {
      id: 'a4301392-97a0-4561-b5e8-bbcae298c132',
      name: 'PVR XL',
      place: 'Mani Square',
    },
    time: '09:50 AM',
    screen: 'Screen 3',
  },
  {
    id: '765d9277-d4d7-484a-a935-93391274ba1d',
    movieId: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    hall: {
      id: '6c0ef8cc-05c0-416d-8c9a-4832162c12c2',
      name: 'Bioscope',
      place: 'Axis Mall',
    },
    time: '10:00 AM',
    screen: 'Screen 2',
  },
  {
    id: '12751145-a925-4101-8cce-ad01d4c45642',
    movieId: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    hall: {
      id: 'bd77a168-b07c-49fa-bd75-a2c013d0335c',
      name: 'Inox',
      place: 'Star Mall',
    },
    time: '10:20 AM',
    screen: 'Screen 5',
  },
  {
    id: 'acd8dcb8-2c54-4503-84a7-aafa7dc2e47b',
    movieId: '523f71c4-b2cb-43bc-8ae3-19d2616e1c77',
    hall: {
      id: 'b78722b7-aa9e-44f2-8d25-9bf518a9e4fe',
      name: 'PVR',
      place: 'Metro Cinema',
    },
    time: '11:00 AM',
    screen: 'Screen 2',
  },


  {
    id: '74d5ac67-b313-4f23-a7a9-23b679a7f362',
    movieId: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    hall : {
      id: '2c0f32b9-0fd7-4389-98b6-0dd56e5ca6c0',
      name: 'Inox',
      place: 'South City',
    },
    time: '08:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '32c77c96-872b-4c58-8f8f-527d9e2e8661',
    movieId: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    hall: {
      id: 'a4301392-97a0-4561-b5e8-bbcae298c132',
      name: 'PVR XL',
      place: 'Mani Square',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: 'd4b4dbfe-bc2f-4f0d-9200-55d2a0778445',
    movieId: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    hall: {
      id: '6c0ef8cc-05c0-416d-8c9a-4832162c12c2',
      name: 'Bioscope',
      place: 'Axis Mall',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '9d31ad20-a8e2-4af5-a00f-0e333fc3360f',
    movieId: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    hall: {
      id: 'bd77a168-b07c-49fa-bd75-a2c013d0335c',
      name: 'Inox',
      place: 'Star Mall',
    },
    time: '09:00 AM',
    screen: 'Screen 2',
  },
  {
    id: 'e3261777-1165-41ee-abb8-2dcc77df3c77',
    movieId: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    hall: {
      id: 'b78722b7-aa9e-44f2-8d25-9bf518a9e4fe',
      name: 'PVR',
      place: 'Metro Cinema',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '8331abbf-2cff-4941-b7aa-1293bbfdfd27',
    movieId: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    hall: {
      id: '2c0f32b9-0fd7-4389-98b6-0dd56e5ca6c0',
      name: 'Inox',
      place: 'South City',
    },
    time: '11:10 AM',
    screen: 'Screen 3',
  },
  {
    id: '8c6f0dfa-b14b-42b0-925a-e324d7ea8478',
    movieId: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    hall: {
      id: 'a4301392-97a0-4561-b5e8-bbcae298c132',
      name: 'PVR XL',
      place: 'Mani Square',
    },
    time: '09:50 AM',
    screen: 'Screen 2',
  },
  {
    id: '765d9277-d4d7-484a-a935-93391274ba1d',
    movieId: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    hall: {
      id: '6c0ef8cc-05c0-416d-8c9a-4832162c12c2',
      name: 'Bioscope',
      place: 'Axis Mall',
    },
    time: '10:00 AM',
    screen: 'Screen 4',
  },
  {
    id: '12751145-a925-4101-8cce-ad01d4c45642',
    movieId: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    hall: {
      id: 'bd77a168-b07c-49fa-bd75-a2c013d0335c',
      name: 'Inox',
      place: 'Star Mall',
    },
    time: '10:20 AM',
    screen: 'Screen 3',
  },
  {
    id: 'acd8dcb8-2c54-4503-84a7-aafa7dc2e47b',
    movieId: 'eae6a409-0419-4b9d-aa73-0ec08a98fa9b',
    hall: {
      id: 'b78722b7-aa9e-44f2-8d25-9bf518a9e4fe',
      name: 'PVR',
      place: 'Metro Cinema',
    },
    time: '11:00 AM',
    screen: 'Screen 2',
  },



  {
    id: '74d5ac67-b313-4f23-a7a9-23b679a7f362',
    movieId: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    hall : {
      id: '2c0f32b9-0fd7-4389-98b6-0dd56e5ca6c0',
      name: 'Inox',
      place: 'South City',
    },
    time: '08:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '32c77c96-872b-4c58-8f8f-527d9e2e8661',
    movieId: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    hall: {
      id: 'a4301392-97a0-4561-b5e8-bbcae298c132',
      name: 'PVR XL',
      place: 'Mani Square',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: 'd4b4dbfe-bc2f-4f0d-9200-55d2a0778445',
    movieId: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    hall: {
      id: '6c0ef8cc-05c0-416d-8c9a-4832162c12c2',
      name: 'Bioscope',
      place: 'Axis Mall',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '9d31ad20-a8e2-4af5-a00f-0e333fc3360f',
    movieId: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    hall: {
      id: 'bd77a168-b07c-49fa-bd75-a2c013d0335c',
      name: 'Inox',
      place: 'Star Mall',
    },
    time: '09:00 AM',
    screen: 'Screen 2',
  },
  {
    id: 'e3261777-1165-41ee-abb8-2dcc77df3c77',
    movieId: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    hall: {
      id: 'b78722b7-aa9e-44f2-8d25-9bf518a9e4fe',
      name: 'PVR',
      place: 'Metro Cinema',
    },
    time: '09:00 AM',
    screen: 'Screen 1',
  },
  {
    id: '8331abbf-2cff-4941-b7aa-1293bbfdfd27',
    movieId: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    hall: {
      id: '2c0f32b9-0fd7-4389-98b6-0dd56e5ca6c0',
      name: 'Inox',
      place: 'South City',
    },
    time: '11:10 AM',
    screen: 'Screen 3',
  },
  {
    id: '8c6f0dfa-b14b-42b0-925a-e324d7ea8478',
    movieId: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    hall: {
      id: 'a4301392-97a0-4561-b5e8-bbcae298c132',
      name: 'PVR XL',
      place: 'Mani Square',
    },
    time: '09:50 AM',
    screen: 'Screen 2',
  },
  {
    id: '765d9277-d4d7-484a-a935-93391274ba1d',
    movieId: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    hall: {
      id: '6c0ef8cc-05c0-416d-8c9a-4832162c12c2',
      name: 'Bioscope',
      place: 'Axis Mall',
    },
    time: '10:00 AM',
    screen: 'Screen 4',
  },
  {
    id: '12751145-a925-4101-8cce-ad01d4c45642',
    movieId: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    hall: {
      id: 'bd77a168-b07c-49fa-bd75-a2c013d0335c',
      name: 'Inox',
      place: 'Star Mall',
    },
    time: '10:20 AM',
    screen: 'Screen 3',
  },
  {
    id: 'acd8dcb8-2c54-4503-84a7-aafa7dc2e47b',
    movieId: 'afd3e11a-3a86-458f-b770-2dbf82a22286',
    hall: {
      id: 'b78722b7-aa9e-44f2-8d25-9bf518a9e4fe',
      name: 'PVR',
      place: 'Metro Cinema',
    },
    time: '11:00 AM',
    screen: 'Screen 2',
  },
]